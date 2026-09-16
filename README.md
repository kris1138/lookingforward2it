# Looking Forward

Static site for the Looking Forward project (rebuilding a farmhouse in Monferrato).

## Structure

- `index.html` — the page content.
- `support.js`, `image-slot.js` — generated runtime code. Both carry
  "do not edit" headers in the source; they're overwritten by the Claude
  Design tooling on rebuild.
- `vendor/` — vendored React/ReactDOM (production builds).
- `images/` — real photos used on the live site.
- `placeholders/` — placeholder images from the design system, kept for
  reference.
- `_ds/` — the design system export (tokens, styles, lint config) from
  Claude Design. Generated; not meant to be hand-edited.

**This folder mirrors a Claude Design project**, which is the source of
truth. Hand edits made only here can be overwritten or cause drift the
next time the design project is re-synced — for content/design changes,
prefer making them upstream in Claude Design where possible.

## Preview locally

Either:

- Open `index.html` in VS Code and use **Live Server** (installed) —
  right-click the file and choose "Open with Live Server".
- Or run a plain static server from this folder:

  ```sh
  python3 -m http.server 8000
  ```

  then visit `http://localhost:8000/`.
