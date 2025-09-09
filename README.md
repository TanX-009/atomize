> [!NOTE]
> AI Generated readme and its incomplete(better than nothing)

# Atomize CLI

A lightweight CLI tool to generate **atomic CSS** from a configuration file.
Built with TypeScript, designed for speed, and easily pluggable into your workflow.

---

## 🚀 Features

- Generate atomic CSS from JSON configs.
- Supports **flexbox utilities**, **spacing scales**, **typography**, and **color schemes**.
- Outputs a single optimized CSS file.
- Zero runtime dependency – just a build-time tool.
- Published on **npm** with GitHub Actions CI/CD.

---

## 📦 Installation

Run directly with `npx` (no install needed):

```bash
npx atomize <config.json> <output.css>
```

Or install globally:

```bash
npm install -g atomize
atomize <config.json> <output.css>
```

Or add as a dev dependency:

```bash
npm install --save-dev atomize
```

---

## ⚡ Usage

### Basic example

```bash
atomize testconfig.json styles/atomized.css
```

- `testconfig.json` → Your config file (defines spacing, type scale, colors, etc.)
- `styles/atomized.css` → Output CSS file with generated classes.

---

## 🛠 Configuration

Example `testconfig.json`:

```json
{
  "utopia": {
    "space": {
      "config": {
        "minWidth": 320,
        "maxWidth": 1920,
        "minSize": 18,
        "maxSize": 20,
        "negativeSteps": [0.1, 0.2, 0.3, 0.4, 0.5],
        "positiveSteps": [1, 2, 3, 4, 6],
        "customSizes": [
          "xs-m",
          "xs-l",
          "s-l",
          "s-xl",
          "m-xl",
          "m-2xl",
          "l-2xl",
          "l-3xl"
        ],
        "relativeTo": "viewport-width"
      },
      "seperator": "-",
      "prefix": "sp"
    },
    "type": {
      "config": {
        "minWidth": 320,
        "maxWidth": 1920,
        "minFontSize": 12,
        "maxFontSize": 36,
        "minTypeScale": 1.1,
        "maxTypeScale": 1.25,
        "negativeSteps": 2,
        "positiveSteps": 5,
        "labelStyle": "tshirt",
        "relativeTo": "viewport-width"
      },
      "seperator": "-",
      "prefix": "st"
    }
  },
  "color": "#B1817B",
  "atomize": {
    "seperator": "-",
    "definitions": [
      {
        "atomic_prefix": "p",
        "css_property": "padding",
        "type": "space"
      },
      {
        "atomic_prefix": "px",
        "css_property": "padding-inline",
        "type": "space"
      },
      {
        "atomic_prefix": "py",
        "css_property": "padding-block",
        "type": "space"
      },
      {
        "atomic_prefix": "pt",
        "css_property": "padding-top",
        "type": "space"
      },
      {
        "atomic_prefix": "pb",
        "css_property": "padding-bottom",
        "type": "space"
      },
      {
        "atomic_prefix": "pr",
        "css_property": "padding-right",
        "type": "space"
      },
      {
        "atomic_prefix": "pl",
        "css_property": "padding-left",
        "type": "space"
      },
      {
        "atomic_prefix": "fs",
        "css_property": "font-size",
        "type": "type"
      },
      {
        "atomic_prefix": "bg",
        "css_property": "background",
        "type": "color"
      },
      {
        "atomic_prefix": "fg",
        "css_property": "color",
        "type": "color"
      }
    ]
  }
}
```

---

## 🎨 Generated Classes

Depending on your config, Atomize generates **atomic CSS utilities** such as(sizes are based on utopia):

### Spacing (from config scale)

```css
/* ... */
.p-s {
  padding: var(--sp-s);
}
.p-m {
  padding: var(--sp-m);
}
.p-l {
  padding: var(--sp-l);
}
.p-xl {
  padding: var(--sp-xl);
}
/* ... */
```

### Typography

```css
.fs-4xl {
  font-size: var(--st-4xl);
}
.fs-3xl {
  font-size: var(--st-3xl);
}
.fs-2xl {
  font-size: var(--st-2xl);
}
.fs-xl {
  font-size: var(--st-xl);
}
.fs-l {
  font-size: var(--st-l);
}
.fs-m {
  font-size: var(--st-m);
}
.fs-s {
  font-size: var(--st-s);
}
.fs-xs {
  font-size: var(--st-xs);
}
```

### Colors

```css
/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
  --primary: #ffb4aa;
  --primaryFixed: #ffdad5;
  --primaryFixedDim: #ffb4aa;
  /* ... */
  }
}
[data-theme="dark"] {
  --primary: #ffb4aa;
  --primaryFixed: #ffdad5;
  --primaryFixedDim: #ffb4aa;
  /* ... */
}

/* Light theme */
@media (prefers-color-scheme: light) {
  :root {
  --primary: #9c4239;
  --primaryFixed: #ffdad5;
  --primaryFixedDim: #ffb4aa;
  /* ... */
  }
}
[data-theme="light"] {
  :root {
  --primary: #9c4239;
  --primaryFixed: #ffdad5;
  --primaryFixedDim: #ffb4aa;
  /* ... */
}
```

### Flexbox

```css
.disf {
  display: flex;
}
.fldc {
  flex-direction: column;
}
.fldr {
  flex-direction: row;
}
.jcc {
  justify-content: center;
}
.jcsb {
  justify-content: space-between;
}
.aic {
  align-items: center;
}
.aifs {
  align-items: flex-start;
}
.aife {
  align-items: flex-end;
}
```

> 💡 These examples are auto-generated from your config and will adapt to your scales and palettes.

---

## 🧑‍💻 Development

```bash
git clone https://github.com/<your-org>/atomize.git
cd atomize
npm install
npm run build
npm link
atomize testconfig.json styles/atomized.css
```

<!-- --- -->
<!---->
<!-- ## 🚢 Publishing -->
<!---->
<!-- This project uses **GitHub Actions** to auto-publish on npm when a version tag is pushed. -->
<!---->
<!-- Release flow: -->
<!---->
<!-- ```bash -->
<!-- # bump version in package.json -->
<!-- git commit -am "release: v0.2.0" -->
<!-- git tag v0.2.0 -->
<!-- git push origin main --tags -->
<!-- ``` -->
<!---->
<!-- The workflow (`.github/workflows/publish.yml`) will: -->
<!---->
<!-- - Build the project -->
<!-- - Publish to npm -->
<!-- - Use your `NPM_TOKEN` secret for auth -->

---

## 📜 License

MIT © 2025 TanX-009
