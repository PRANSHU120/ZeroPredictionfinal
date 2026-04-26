# Zeroprediction Trading Made Easy

Premium responsive landing page for SwingNifty with Google Sheet powered monthly performance.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Google Sheet performance

Create/publish a CSV sheet with these columns:

```csv
Month,Net PNL,ROI %
```

Add the published CSV URL to `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL=YOUR_PUBLISHED_CSV_LINK
```

If the env variable is empty, the website uses the sample CSV from `public/data/performance.csv`.
