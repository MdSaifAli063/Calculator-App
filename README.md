# 🧮 Modern Calculator

A sleek, accessible, and responsive calculator with a polished History dropdown, light/dark themes, and full memory support. Runs entirely in the browser—no build step, no dependencies.

<p align="center">
  <!-- Inline SVG icon (renders on GitHub) -->
  <svg width="96" height="96" viewBox="0 0 64 64" aria-hidden="true" role="img">
    <title>Calculator</title>
    <defs>
      <linearGradient id="calc-grad-1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#8b5cf6"/>
        <stop offset="1" stop-color="#4f46e5"/>
      </linearGradient>
      <linearGradient id="calc-grad-2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#60a5fa"/>
        <stop offset="1" stop-color="#0ea5e9"/>
      </linearGradient>
    </defs>
    <rect x="8" y="6" width="48" height="52" rx="10" fill="#ffffff" stroke="#d1d5db" stroke-width="2"/>
    <rect x="12" y="10" width="40" height="12" rx="4" fill="#eef2ff" stroke="#e5e7eb" stroke-width="1.5"/>
    <g fill="#1f2937">
      <rect x="12" y="26" width="10" height="10" rx="2"/>
      <rect x="24" y="26" width="10" height="10" rx="2"/>
      <rect x="36" y="26" width="10" height="10" rx="2"/>
      <rect x="12" y="38" width="10" height="10" rx="2"/>
      <rect x="24" y="38" width="10" height="10" rx="2"/>
      <rect x="36" y="38" width="10" height="10" rx="2"/>
    </g>
    <rect x="48" y="26" width="8" height="22" rx="2" fill="url(#calc-grad-1)"/>
    <rect x="12" y="50" width="44" height="6" rx="3" fill="url(#calc-grad-2)" opacity=".9"/>
  </svg>
</p>

<p align="center">
  <em>Refined History dropdown with sticky header, smooth animation, and clear affordances. Accessible focus states and keyboard support baked in.</em>
</p>

---

## Screenshots

![image](https://github.com/Mdsaif4363/Calculator-App/blob/fad96a8cd051713b1be06c623d1b1d6ded192e41/Screenshot%202025-08-29%20005140.png)

## 📚 Contents

- [📖 Overview](#overview)
- [⚙️ Features](#features)
- [🚀 Quick Start](#quick-start)
- [🧑‍💻 Usage](#usage)
- [⌨️ Keyboard Shortcuts](#keyboard-shortcuts)
- [🗂️ History Dropdown](#history-dropdown)
- [🧠 Memory Functions](#memory-functions)
- [🎨 Theming](#theming)
- [♿ Accessibility](#accessibility)
- [📁 Project Structure](#project-structure)
- [🛠️ Customization](#customization)
- [🌐 Browser Support](#browser-support)
- [⚡ Performance Notes](#performance-notes)
- [🛣️ Roadmap](#roadmap)
- [❓ FAQ](#faq)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

---


## 📖 Overview

This calculator focuses on clarity, speed, and accessibility:

- 🧼 Clean UI, responsive layout, and consistent spacing  
- 🧾 History dropdown that feels native and stays usable on small screens  
- 🌗 Light/Dark themes driven by CSS variables  
- 🧠 Memory keys with a live indicator  

🛑 No frameworks, bundlers, or external CSS/JS—just HTML/CSS/JS.

---


## ⚙️ Features

- ➕➖✖️➗ Core math: +, −, ×, ÷, %, decimal, 00  
- ✨ Equals action with subtle glow and high-contrast style  
- 🧠 Memory:
  - MC: Clear memory  
  - MR: Recall memory  
  - M+: Add to memory  
  - M−: Subtract from memory  
  - 🔔 Live memory indicator updates when value exists  
- 🗂️ History:
  - Expandable details/summary with sticky header  
  - Smooth open animation  
  - Hover stripe and subtle elevation cues  
  - Scrollable list with a thin, themed scrollbar  
  - 🧹 Clear History button  
- 🎨 Theming:
  - Light and Dark modes via CSS variables  
  - Single toggle button  
- ♿ Accessibility:
  - Focus-visible rings  
  - Reduced motion support  
  - Tabular numerals for aligned results  

---

## 🚀 Quick Start

- 🖱️ Option A: Double-click `index.html`  
- 🖥️ Option B: Run a local server:
  - 🐍 Python: `python3 -m http.server 8080`  
  - 🟦 Node: `npx serve .`  
  - 🍞 Bun: `bunx serve .`  

🔗 Open `http://localhost:8080` if you used a server.

---

## 🧑‍💻 Usage

- Click on-screen keys or type on your keyboard  
- Press `=` to evaluate  
- Previous expression appears above the main display  
- Use History dropdown to revisit or clear past calculations  
- Memory keys manage a stored numeric value; "M" indicator shows when memory is set  
- Theme toggle switches Light/Dark mode  

---


## ⌨️ Keyboard Shortcuts

- 🔢 Digits: `0–9`  
- 💯 Double zero: `0` twice or use `00` button  
- 🔘 Decimal point: `.`  
- ➕➖✖️➗ Operators: `+ - * / %`  
- ✅ Evaluate: `Enter` or `=`  
- ⬅️ Delete last: `Backspace`  
- 🧹 Clear all: `C` or `Escape`  
- 🔄 Toggle history: `Space` or `Enter` (when summary is focused)  
- ↔️ Navigate: `Tab` / `Shift+Tab` between controls  

---

## History Dropdown

- Built with semantic `<details>/<summary>` for native accessibility and keyboard toggling
- Sticky header stays visible while scrolling entries
- Opening animates content for a clear state change
- Hovering an item reveals a subtle left accent stripe and elevates the card
- Clear History removes all entries

Tips:

- On mobile, the sticky header avoids losing the Clear button while scrolling
- The scrollbar is thin and themed to the accent color

## Memory Functions

- `MR`: Inserts the stored memory value into the display
- `MC`: Clears memory and the M indicator
- `M+`: Adds the current value/result to memory
- `M−`: Subtracts the current value/result from memory
- The memory indicator lights up when memory holds a value

Common flow:

1. Compute a result, press `M+` to store
2. Later, press `MR` to reuse
3. Press `MC` when done

## Theming

Theme variables live under `:root` and `html.dark`:

Key tokens:

- `--accent`, `--accent-600`, `--accent-700`, `--accent-contrast`
- `--operator`, `--operator-600`
- `--bg`, `--bg-gradient`, `--surface`, `--surface-2`
- `--text`, `--text-muted`, `--border`
- `--radius-md`, `--radius-lg`, `--radius-xl`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`

Adjust these in `index.css` to customize the look. The equals button uses accent shades; operator buttons use operator shades.

## Accessibility

- Focus-visible outlines help keyboard users
- Summary is keyboard-toggleable
- Reduced motion respected via `prefers-reduced-motion`
- Numerals use `font-variant-numeric: tabular-nums` for readability
- High-contrast states for critical buttons (equals, clear)

If you perform live announcements (e.g., memory changes), ensure `aria-live` regions are present in your HTML.

## Project Structure

- `index.html` — Markup for calculator, keys, memory controls, and history panel
- `index.css` — Theme variables, layout, button styles, and the enhanced History dropdown
- `index.js` — Evaluation logic, events, history/memory state, and theme toggle wiring

## Customization

- Max width: Adjust `.calculator` and `.history-panel` (default `420px`)
- Key size: Tune `.keys button` height and padding
- History height: `#history-list` `max-height` (default `220px`; `180px` on small screens)
- Focus ring: `--focus-ring` controls color/opacity
- Accent/brand: Change `--accent` in both light and dark contexts
- Operator style: Tweak `--operator` variables and operator button rules

Pro tip: Keep hover and active states consistent with semantic meaning (accent for primary, operator for math ops, warning/danger for destructive actions).

## Browser Support

- Latest Chrome, Edge, Firefox, Safari
- Graceful with reduced motion preferences
- No polyfills required for the baseline features used

## Performance Notes

- No runtime dependencies or heavy assets
- CSS-only animations kept short and GPU-friendly
- Scroll areas use thin, themed scrollbars without JS

## Roadmap

- Optional scientific functions (sin, cos, tan, log, pow)
- History persistence in `localStorage`
- Click-to-reuse entire expression from history
- Internationalization (decimal separators)
- Unit and E2E test coverage

## FAQ

- Why `details/summary`?
  - Native semantics, built-in keyboard support, and screen-reader familiarity.
- Can I persist history?
  - Yes — connect `#history-list` to `localStorage` in `index.js`.
- How do I change accent color?
  - Edit `--accent`, `--accent-600`, and `--accent-700` in `index.css` (and matching values in `html.dark`).
- Does it support keyboard input?
  - Yes — digits, operators, `Enter`, `Backspace`, and `Clear` are mapped.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit with clear messages
4. Open a PR

Keep UI changes consistent with the design tokens and accessibility standards. If adding features, update this README and include a brief test plan.

## License

MIT License — use, modify, and distribute under the terms of the license.
