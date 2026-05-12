# amelia3141.github.io

Personal site. Static HTML + JSX (transpiled in-browser via Babel standalone).

## Local preview

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Static. Push to `main` and serve via GitHub Pages (Settings → Pages → Source: `main` / root).

## Structure

```
index.html              # entry; loads fonts + scripts
app.jsx                 # composition root
components/*.jsx        # one component per section
```

## Editing content

Each section is self-contained:

| Section      | File                          |
|--------------|-------------------------------|
| now/         | components/Now.jsx            |
| research/    | components/Research.jsx       |
| experience/  | components/Experience.jsx     |
| toolkit/     | components/Toolkit.jsx        |
| recognition/ | components/Recognition.jsx    |
| contact/     | components/Contact.jsx        |
| hero         | components/Hero.jsx           |
| footer       | components/Footer.jsx         |

Edit the arrays at the top of each file and push.
