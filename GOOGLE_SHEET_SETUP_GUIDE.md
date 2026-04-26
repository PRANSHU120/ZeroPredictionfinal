# Google Sheet Performance Setup

Use this sheet format so the website can show a small public performance table:

```csv
Month,Net PNL,ROI %
January 2026,42000,8.40%
February 2026,31500,6.30%
```

## Client workflow

1. Open Google Sheet.
2. Add or update monthly rows only.
3. Keep columns exactly: Month, Net PNL, ROI %.
4. Publish the sheet as CSV: File -> Share -> Publish to web -> CSV.
5. Add the published CSV URL in .env.local:

```env
NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL=YOUR_PUBLISHED_CSV_LINK
```

No code update is required for monthly performance changes.
