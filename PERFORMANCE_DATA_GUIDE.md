# How client can update performance data daily

## Option 1: Simple CSV update (current setup)
1. Open `public/data/performance.csv`.
2. Add a new row daily in this format:
   `date,month,capital,pnl,roi,drawdown,notes`
3. Example:
   `2026-04-25,April 2026,250000,8500,3.4%,1.2%,Weekly swing position closed`
4. Save the file.
5. Push code to GitHub. Netlify/Vercel will redeploy automatically.

## Option 2: Excel to CSV
1. Maintain data in Excel with same columns.
2. Click File → Save As → CSV.
3. Replace `public/data/performance.csv` with the exported CSV.
4. Push to GitHub.

## Why Zerodha verified PNL is not embedded live
Zerodha Console verified PNL pages generally cannot be shown directly inside an iframe because financial dashboards block external embedding for security. Also, verified links/tokens can expire or need regeneration.

Best production approach:
- Keep a “View Full Verified PNL” button linking to Zerodha.
- Show a screenshot fallback or summary cards on the website.
- Update the verified link token manually whenever Zerodha regenerates it.
- Use the CSV table for daily/monthly performance display.
