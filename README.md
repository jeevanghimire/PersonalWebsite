# Jeevan Ghimire — Personal Website

Personal portfolio website for Jeevan Ghimire — Agency Owner at Promoholic, VP Talent Management at AIESEC in Lumbini, and BSc CSIT student.

## Live Site

**https://jeevanghimire.name.np**

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — No framework
- **Bootstrap 5** — Layout & components
- **AOS** — Scroll animations
- **Swiper** — Carousels
- **GLightbox** — Image lightbox
- **Isotope** — Portfolio filtering
- **Typed.js** — Hero text animation
- **PureCounter** — Statistics counters
- **EmailJS** — Contact form (client-side)
- **PHP** — Contact form fallback (server-side)

## Project Structure

```
.
├── index.html              # Main page
├── 404.html                # Custom 404
├── portfolio-details.html  # Project detail template
└── assets/
    ├── css/style.css       # Custom styles
    ├── js/main.js          # Main JavaScript
    ├── php/contact.php     # Server-side form handler
    ├── img/mypicture/      # Hero photo & favicon
    ├── uploads/            # Client logos
    └── vendor/             # Minified third-party libraries
```

## Features

- Responsive single-page layout
- Dark/light theme support
- Animated statistics counters
- Client logo carousel
- Portfolio with filtering
- Contact form with email validation (client + server)
- Smooth scroll navigation
- Mobile-friendly hamburger menu

## Local Development

```bash
# Using Python
python3 -m http.server 8000

# Using PHP (for contact form)
php -S localhost:8000

# Using Node
npx serve .
```

Then open `http://localhost:8000`

## Deployment

Deployed on **GitHub Pages**. Push to `master` branch triggers automatic deployment via GitHub Actions.

## Contact Form Setup

The form uses EmailJS (primary) with PHP fallback.

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add email service → get **Service ID**
3. Create template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}` → get **Template ID**
4. Update `assets/vendor/php-email-form/validate.js`:
   ```js
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams)
   ```

## License

MIT — Free to use and customize.