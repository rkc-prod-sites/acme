# Acme Garments Limited — Website

A modern, static, SEO-optimised website for Acme Garments Limited (Nadi, Fiji), covering both business lines: hospitality linen/textile supply and fashion retail/garment manufacturing.

Plain HTML/CSS/JS — no build step, deploys straight to GitHub Pages.

## Structure

```
index.html          Home
about.html           About Us
hospitality.html     Hospitality Supply (B2B / wholesale)
fashion.html         Fashion & Garments (retail / manufacturing)
contact.html         Contact form + both locations
404.html             Custom not-found page
css/styles.css       Design system (colors, type, components)
js/main.js           Mobile nav, contact form submit
images/              Photos (see Image credits below)
robots.txt / sitemap.xml   SEO
```

## Before going live — action items

1. **Real photography.** A few product/store photos are still licensed stock standing in for the real thing (see credits below) — several have already been swapped for real Acme photos. Send through the rest and I'll swap them in — same filenames in `images/` if you want a zero-code-change swap.

2. **Domain.** Paths in this site are relative, so it'll work fine at `https://<username>.github.io/<repo>/` out of the box. If you want it at `acmefiji.com`:
   - Add a `CNAME` file at the repo root containing just `acmefiji.com`
   - Point your domain's DNS at GitHub Pages (see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
   - Update the `https://www.acmefiji.com/...` URLs in each page's `<link rel="canonical">`, Open Graph tags, `robots.txt` and `sitemap.xml` if the final domain differs

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from branch → main / (root)**.

## SEO notes

- Every page has a unique `<title>`, meta description, canonical URL, and Open Graph/Twitter card tags.
- `index.html` includes `Organization`/`LocalBusiness` structured data (JSON-LD) covering both locations — update phone/address there if they change.
- `sitemap.xml` and `robots.txt` are ready; submit the sitemap in [Google Search Console](https://search.google.com/search-console) once live.
- All images have descriptive `alt` text; keep this up to date as you swap in real photos.
- Once real photos replace the stock ones, re-run them through compression (e.g. [squoosh.app](https://squoosh.app)) to keep pages fast — current images are pre-compressed to ~100–500KB each.

## Image credits (temporary stock, to be replaced)

All current photos are free-license images from Unsplash (Unsplash License — free for commercial use, no attribution legally required), used as placeholders until real Acme photography is supplied.
