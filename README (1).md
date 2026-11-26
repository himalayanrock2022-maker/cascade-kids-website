# Cascade Kids Behavioral Solutions — ABA Practice Website (Seattle, WA)

Demo website for a Seattle, WA ABA practice. Different name, state, colors and content from the Florida site.

## Files — ALL 4 are needed (multi-file, NOT single-file)
- index.html — main page
- style.css — styling (MUST upload with index.html, same folder)
- script.js — smooth scroll
- README.md — this file

## How to deploy on Vercel — IMPORTANT: upload ALL files together

### Vercel Upload
1. vercel.com → Add New → Project → Upload
2. Select ALL files together: index.html + style.css + script.js (not just index.html)
3. Deploy — you get cascade-kids.vercel.app

If you upload only index.html, CSS will NOT load and site will look plain — like last time.

### GitHub + Vercel
1. GitHub → New Repo → name: cascade-kids-website → Upload ALL 3 files (index.html, style.css, script.js) in the SAME folder / root — no subfolder
2. Vercel → Import from GitHub → Deploy

### Check before deploy
- All 3 files must be in the SAME folder, root level
- index.html must have: <link rel="stylesheet" href="style.css">
- File names are case-sensitive: style.css (small s)

## To make it real
- Replace: (206) 555-0192, hello@cascadekidsaba.com, 3421 Fremont Ave N address
- Replace insurance: Premera, Regence, Kaiser, Aetna, Cigna, TRICARE, Apple Health
- For working form: use Formspree (formspree.io)
