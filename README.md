# Radiator store — web interface

Academic project that simulates an e-commerce interface using HTML, CSS, JavaScript and Bootstrap.

## Features

- Product catalog and product pages.
- Shopping cart with local browser state.
- Login and registration screens as part of the interface.
- Shared header, footer and carousel components.

## View locally

Serve the directory through a static web server. One option, with Python installed:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. There is no package.json defining a build workflow.

## Structure

- `index.html` and other HTML files: screens.
- `components/`: interface components.
- `script/` and `app.js`: browser behavior.
- `css/`: styles.

## Scope

Frontend simulation with local storage. There is no server authentication, remote database or real payment processing. The node_modules directory is versioned in the current history; this is a maintenance issue, not a documented installation step.
