# Wuhan Hengtongyuan Environmental Engineering - Full Site Clone (English)

This project is a full-site clone of [www.027scl.com](http://www.027scl.com), converted to English. It preserves the original layout, styles, and interactive functionality.

## Project Structure

```
027scl-clone/
├── index.html                      # Homepage
├── about.html                      # About Us
├── products.html                   # Equipment listing
├── news.html                       # News listing
├── cases.html                      # Project cases
├── solutions.html                  # Solutions
├── quick-order.html                # Quick Order form
├── contact.html                    # Contact Us
├── product-voc.html                # VOC Exhaust Gas Treatment
├── product-water-purification.html # Water Purification Equipment
├── product-ro.html                 # RO System
├── product-sewage.html             # Urban Sewage Treatment
├── product-rainwater.html          # Rainwater Utilization Equipment
├── product-cyclone.html            # Cyclone Dust Removal System
├── product-food-wastewater.html    # High-Salinity Food Wastewater System
├── product-pv-cleaning.html        # PV Glass Cleaning Equipment
├── news-38.html                    # Rural Sewage Treatment article
├── news-39.html                    # Sewage Equipment Price article
├── news-37.html                    # Pig Farm Sewage Cost article
├── news-14.html                    # Quality Supplier Award article
├── news-23.html                    # Urban Sewage Resource article
├── news-22.html                    # Sludge Treatment Rate article
├── css/
│   └── style.css                   # All styles
├── js/
│   └── main.js                     # Banner carousel, back-to-top, nav active
├── images/                         # Local images directory (uses CDN images)
└── README.md
```

## Features

- Full English website with 22 HTML pages
- Header with company name, logo, and phone number
- Blue navigation bar (Home, About Us, News, Equipment, Projects, Solutions, Quick Order, Contact Us)
- Three-image banner carousel (auto-play + manual navigation)
- Info bar with brand slogan and service hotline
- Company profile section (text left, image right layout)
- 8-product equipment grid with detail pages
- News section with 6 article detail pages
- Solutions listing with 6 solution categories
- Project cases grid
- Quick Order form with detailed requirements
- Contact page with info cards, map, and contact form
- Friend links section (government and institution links)
- Footer with navigation, company name, QR code, phone, copyright
- Back-to-top button
- Responsive design for mobile devices

## How to Run

### Option 1: Direct Open

Double-click `index.html` to open in your browser.

### Option 2: Local Server

**Python:**

```bash
cd 027scl-clone
python -m http.server 8080
```

Then visit http://localhost:8080

**Node.js (http-server):**

```bash
npx http-server 027scl-clone -p 8080
```

Then visit http://localhost:8080

## Technical Notes

- Pure HTML + CSS + JavaScript, no framework dependencies
- Image assets reference original CDN (https://16597221.s21i.faiusr.com)
- Responsive design with mobile support
- Site width: 1200px (matching original)
- All 22 pages with consistent header, navigation, and footer
- All internal links verified (no broken links)

## Clone Source

- Original website: https://www.027scl.com
- Company: Wuhan Hengtongyuan Environmental Engineering Technology Co., Ltd.
- Clone date: 2026-09-01
- Language: English (converted from Chinese)
