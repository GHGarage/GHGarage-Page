# GH Garage — автосервиз във Варна

Single-page site for **GH Garage**, a car service in Varna focused on diagnostics,
auto electrics, air conditioning, air suspension and light mechanical work.

**Live demo:** https://ghgarage.github.io/GHGarage-Page/ (after GitHub Pages is enabled)

---

## Business information used

- **Name:** GH GARAGE
- **Address:** ул. „Атанас Москов“ 38, 9009 Варна (кв. Владислав Варненчик)
- **Phone:** 089 999 3203 (main); 087 945 9965 (secondary)
- **Email:** icoatanasov@mail.bg
- **Google Maps:** https://www.google.com/maps?cid=15963767772826249730
- **Facebook:** https://www.facebook.com/people/GH-Garage/100066629180747/
- **Google rating:** 5.0 from 4 reviews (at the time of the build)

The hours were not set on the Google/Facebook listings when the page was built, so the
site currently says „По уговорка“ and asks visitors to call. Update this once the owner
confirms the working hours.

---

## Structure

```
.
├── index.html                  # the whole page (HTML + CSS + JSON-LD)
├── _headers                    # Cloudflare Pages security headers
├── assets/
│   ├── app.js                  # nav, scroll reveal, click-to-load map
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.jpg            # 1200×630 social preview
│   └── img/
│       ├── hero-garage.webp
│       ├── garage-front.webp
│       ├── workshop-lift.webp
│       └── workshop-bmw.webp
└── README.md
```

No build step, no framework, no backend. The map is click-to-load (Google Maps iframe
is only created after the visitor presses „Покажи картата“).

---

## Before publishing on a real domain

1. Update the canonical URL, `og:url` and `og:image` in `index.html` — they currently
   point to `https://ghgarage.github.io/GHGarage-Page/`.
2. Confirm working hours with the owner and replace „По уговорка“.
3. Confirm permission to use the photos from the Facebook page and Google Street View.
   They are used here as placeholders for the concept.
4. Check the phone/email with the owner before going live.

---

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

---

## Deployment

The repo works as a plain static site. Enable GitHub Pages (branch `main`, root) or
connect it to Cloudflare Pages. The `_headers` file is only used by Cloudflare Pages.
