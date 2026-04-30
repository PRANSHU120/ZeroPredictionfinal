"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  FileSpreadsheet,
  Info,
} from "lucide-react";

type PerformanceRow = {
  month: string;
  trades: string;
  netPnl: string;
  cagr: string;
};

const LOCAL_FALLBACK_CSV = "/data/performance.csv";
const GOOGLE_SHEET_CSV_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL || LOCAL_FALLBACK_CSV;

const ZERODHA_PNL_LINK = "https://console.zerodha.com/verified/2afb85b4";

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let row: string[] = [];
  let insideQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") i += 1;
      row.push(current.trim());
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  row.push(current.trim());
  if (row.some((cell) => cell.length > 0)) rows.push(row);

  return rows;
}

function findColumn(
  headers: string[],
  matchers: ((header: string) => boolean)[],
  fallback: number
) {
  const index = headers.findIndex((header) =>
    matchers.some((matcher) => matcher(header))
  );

  return index >= 0 ? index : fallback;
}

function cleanTrades(value: string): string {
  const cleaned = value.replace(/[^0-9]/g, "");
  return cleaned || "0";
}

function numberFromMoney(value: string): number {
  const cleaned = value.replace(/[^0-9.-]/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: string): string {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed.toLocaleString("en-IN") : value;
}

function pnlClass(value: string) {
  const amount = numberFromMoney(value);

  if (amount < 0) return "text-red-600";
  if (amount > 0) return "text-emeraldDeep";

  return "text-charcoal";
}

function cagrClass(value: string) {
  const amount = numberFromMoney(value);

  if (amount < 0) return "text-red-600";
  if (amount > 0) return "text-emeraldDeep";

  return "text-charcoal";
}

function mapPerformanceRows(text: string): PerformanceRow[] {
  const csvRows = parseCSV(text);
  const [headers = [], ...dataRows] = csvRows;

  const normalizedHeaders = headers.map((header) =>
    header.trim().toLowerCase()
  );

  const monthIndex = findColumn(
    normalizedHeaders,
    [(h) => ["month", "date"].includes(h)],
    0
  );

  const tradesIndex = findColumn(
    normalizedHeaders,
    [(h) => h.includes("trade")],
    1
  );

  const netPnlIndex = findColumn(
    normalizedHeaders,
    [
      (h) => h.includes("net") && h.includes("pnl"),
      (h) => h === "pnl",
    ],
    2
  );

  const cagrIndex = findColumn(
    normalizedHeaders,
    [
      (h) => h.includes("cagr"),
      (h) => h.includes("roi"),
      (h) => h.includes("return"),
    ],
    3
  );

  return dataRows
    .map((cells) => ({
      month: cells[monthIndex] || "-",
      trades: cleanTrades(cells[tradesIndex] || "0"),
      netPnl: cells[netPnlIndex] || "-",
      cagr: cells[cagrIndex] || "-",
    }))
    .filter(
      (item) =>
        item.month !== "-" &&
        item.month.toLowerCase() !== "month" &&
        item.month.toLowerCase() !== "date"
    );
}

export default function PerformanceTable() {
  const [rows, setRows] = useState<PerformanceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string>("");

  useEffect(() => {
    async function loadPerformanceData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${GOOGLE_SHEET_CSV_URL}${
            GOOGLE_SHEET_CSV_URL.includes("?") ? "&" : "?"
          }cacheBust=${Date.now()}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Performance sheet could not be loaded. Use the published CSV link, not the normal Google Sheet edit link."
          );
        }

        const csvText = await response.text();
        const parsedRows = mapPerformanceRows(csvText);

        if (!parsedRows.length) {
          throw new Error(
            "No performance rows found. Add at least one row below the header in Google Sheet."
          );
        }

        setRows(parsedRows.reverse());

        setUpdatedAt(
          new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          })
        );
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Unable to load performance data."
        );
      } finally {
        setLoading(false);
      }
    }

    loadPerformanceData();
  }, []);

  const summary = useMemo(() => {
    const latest = rows[0];
    const oldest = rows[rows.length - 1];

    const totalTrades = rows.reduce(
      (sum, row) => sum + Number(cleanTrades(row.trades)),
      0
    );

    const netPnl = rows.reduce(
      (sum, row) => sum + numberFromMoney(row.netPnl),
      0
    );

    return {
      evaluationPeriod:
        oldest && latest ? `${oldest.month} - ${latest.month}` : "-",
      totalTrades: totalTrades.toString(),
      netPnl,
      cagr: latest?.cagr || "-",
    };
  }, [rows]);

  const visibleRows = rows.slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-premium">
      <div className="border-b border-emerald-900/10 bg-mintSoft p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-forest">
              <FileSpreadsheet size={14} />
              Published Monthly Performance
            </div>

            <h3 className="text-2xl font-black text-charcoal">
              Performance View
            </h3>

            
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-charcoal/45">
              Evaluation Period
            </p>
            <p className="mt-2 text-base font-black text-charcoal">
              {summary.evaluationPeriod}
            </p>
            <p className="mt-2 text-[11px] font-semibold text-charcoal/45">
              Last 12 months
            </p>
          </div>

          <div className="rounded-2xl bg-white p-3  shadow-sm text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-charcoal/45">
              Total Trades
            </p>
            <p className="mt-2 text-base font-black text-charcoal">
              {formatNumber(summary.totalTrades)}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-charcoal/45">
              Net PNL
            </p>

            <p
              className={`mt-2 text-base font-black ${pnlClass(
                String(summary.netPnl)
              )}`}
            >
              {formatCurrency(summary.netPnl)}
            </p>

            
          </div>

          <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-charcoal/45">
              Avg Capital Used
            </p>
            <p className={`mt-2 text-base font-black`}>
              21.25 L
            </p>
            
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 text-xs font-semibold text-charcoal/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Last synced: {updatedAt || "Not loaded yet"}</span>

        </div>
      </div>

      {error ? (
        <div className="m-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-1" />
            <div>
              <p className="font-black">Performance data is not loading</p>
              <p className="mt-1 text-sm leading-6">{error}</p>
              <p className="mt-2 text-sm leading-6">
                Please check the Google Sheet publish-to-web CSV link or contact
                support for the latest published records.
              </p>
            </div>
          </div>
        </div>
      ) : loading ? (
        <div className="grid min-h-[220px] place-items-center p-8 text-center">
          <div>
            <div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-4 border-emerald-900/15 border-t-forest" />
            <p className="font-black text-charcoal">
              Loading latest monthly performance...
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-white text-charcoal/70">
              <tr>
                {["Month", "Number of Trades", "Net PNL", "Capital Used"].map(
                  (header) => (
                    <th key={header} className="px-6 py-4 font-black text-center">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {visibleRows.map((row, index) => (
                <tr
                  key={`${row.month}-${index}`}
                  className="border-t border-emerald-900/10 transition hover:bg-mintSoft/50 text-center"
                >
                  <td className="px-6 py-4 font-bold text-charcoaltext-center text-center">
                    {row.month}
                  </td>

                  <td className="px-6 py-4 font-bold text-charcoal/75 text- right text-center">
                    {formatNumber(row.trades)}
                  </td>

                  <td className={`px-6 py-4 font-bold ${pnlClass(row.netPnl)}`} >
                    {row.netPnl} 
                  </td>

                  <td className={`px-6 py-4 font-bold text-center ${cagrClass(row.cagr)}`}>
                    {row.cagr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="border-t border-emerald-900/10 bg-white p-6">
        <div className="mb-4 flex justify-end">
          <a
            href="/performance"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-sm font-extrabold text-forest shadow-sm transition hover:scale-105"
          >
            Show full performance <ExternalLink size={15} />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-mintSoft p-4 text-sm leading-6 text-charcoal/70">
            <CheckCircle2 className="mb-2 text-forest" />
            <strong className="text-charcoal">Regular Updates:</strong>{" "}
            Performance data is consistently refreshed to reflect the most
            recent trading results.
          </div>

          <div className="rounded-2xl bg-mintSoft p-4 text-sm leading-6 text-charcoal/70">
            <Info className="mb-2 text-forest" />
            <strong className="text-charcoal">No guarantees:</strong> These
            records are provided for process evaluation only; past performance is
            not a definitive indicator of future results.
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-900/10 bg-mintSoft p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black text-charcoal">Verified Zerodha PNL</p>
            <p className="mt-1 text-sm leading-6 text-charcoal/65">
              View the verified broker record separately for additional
              confidence and transparent review.
            </p>
            <p className="mt-1 text-xs font-semibold text-charcoal/45">
              Made available by broker for a maximum of last 360 days.
            </p>
          </div>

          <a
            href={ZERODHA_PNL_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-extrabold text-white transition hover:scale-105"
          >
            View Verified PNL <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}