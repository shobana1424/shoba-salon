# Shoba Salon & Spa – Frontend Demo
React + Vite + Tailwind + React Router + Framer Motion + Recharts + Lucide. **Frontend only**: all data is mock data in `localStorage` (prefix `shoba_`). No backend, database, payments or API calls.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build
```
## Demo logins
- Admin: `admin@shoba.demo` / `admin123` (`/login/admin`)
- Client: `client@shoba.demo` / `client123` (`/login/client`, registration also available)

## Shared availability
`src/utils/appointments.js` holds the single set of functions (`getAvailableSlots`, `validateSlot`, `checkAppointmentConflict`, `createAppointment`, `cancelAppointment`, `calculateServiceDuration`, `calculateTotalPrice`) used by both Admin (offline) and Client (online) booking, all through one `appointments` list in `AppContext`. Hours 9:00–18:00, single staff, 30-min start grid. Cancelled bookings release their slot.
Note: sync works within the same browser (localStorage); there is no real-time multi-device sync.

## Customise
- Contact details (demo placeholders): `src/data/site.js`
- Seed services/offers/users: `src/data/seed.js` (reset by clearing site data in browser)
- Photos: `src/assets/images` (mapped by category in `src/assets/photos.js`; Bridal/Nail/Body Care use illustrations until you add photos). Logo: `src/assets/images/logo.png`. Note: some supplied stock images carry watermarks - use licensed versions before going live.
- Illustrations: original vector illustrations in `src/components/cards/Illustrations.jsx` (rendered by `Visual.jsx`); swap in your own photos from `src/assets` any time.
- Scroll animations: `src/components/common/Reveal.jsx` (reveals), hero parallax in `Public.jsx`, progress bar in `Layout.jsx`.
