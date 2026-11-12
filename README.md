# Villa 167 Cafe — Demo Website

A responsive React + Vite cafe website using Bootstrap 5, React Bootstrap, React Icons and custom CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Before showing this demo to the cafe

1. Replace sample menu items and prices in `src/data/menuData.js` with the cafe's approved menu.
2. Add the cafe's verified WhatsApp number to `WHATSAPP_NUMBER` in `src/components/Reservation.jsx` (digits only, including country code).
3. Confirm opening hours, phone number, social profiles and Google Maps pin.
4. Replace placeholder review content with verified reviews if the cafe approves.

The menu data and reservation form are demo-only. The form opens WhatsApp only after a business number is configured; it does not confirm a booking.

Images are loaded from Unsplash URLs and require an internet connection.
