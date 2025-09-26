# 🧮 Modern Calculator
# 🧮 Modern Calculator

A sleek, accessible, and responsive calculator with a polished History dropdown, 🌞/🌙 theme toggle, and full memory support. Runs entirely in the browser—no build step, no dependencies.

<p align="center">
  <img src="https://raw.githubusercontent.com/MdSaifAli063/Calculator-App/main/assets/icons/calculator-icon.png" width="96" alt="Calculator Icon">
</p>

<p align="center">
  <em>Refined History dropdown with sticky header, smooth animation, and clear affordances. Accessible focus states and keyboard support baked in.</em>
</p>

<p align="center">
  <a href="https://github.com/MdSaifAli063/Calculator-App">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/MdSaifAli063/Calculator-App?style=social">
  </a>
  <a href="https://github.com/MdSaifAli063/Calculator-App/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
  <img alt="Responsive" src="https://img.shields.io/badge/responsive-yes-brightgreen">
  <img alt="Accessibility" src="https://img.shields.io/badge/accessibility-AA%2B-important">
  <img alt="Theme Support" src="https://img.shields.io/badge/theme-light%20%2F%20dark-yellow">
</p>


<p align="center">
  <a href="https://github.com/Mdsaif4363/Calculator-App">
    <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/Mdsaif4363/Calculator-App?style=social">
  </a>
  <a href="https://github.com/Mdsaif4363/Calculator-App/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
  <img alt="Responsive" src="https://img.shields.io/badge/responsive-yes-brightgreen">
  <img alt="Accessibility" src="https://img.shields.io/badge/accessibility-AA%2B-important">
  <img alt="Theme Support" src="https://img.shields.io/badge/theme-light%20%2F%20dark-yellow">
</p>

---

## 🧾 Highlights

- ⚡ Instant math evaluation with memory support  
- 🗂️ Expandable history panel with sticky header  
- 🎨 Light/Dark theme toggle with persistent preference  
- ♿ Fully accessible: keyboard-friendly, focus-visible, reduced motion support  
- 🧱 No frameworks, no build tools—just HTML, CSS, and JS

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

## 🗂️ History Dropdown

- Built with semantic `<details>/<summary>` for native accessibility  
- 📌 Sticky header stays visible while scrolling  
- 🎞️ Opening animates content for clear state change  
- 🖱️ Hover reveals accent stripe and elevation  
- 🧹 Clear History removes all entries  

📱 Mobile tip: Sticky header keeps Clear button visible  
🎨 Scrollbar is thin and themed to accent color  

---

## 🧠 Memory Functions

- `MR`: Inserts stored memory value  
- `MC`: Clears memory and indicator  
- `M+`: Adds current value/result to memory  
- `M−`: Subtracts current value/result from memory  
- 🔔 Indicator lights up when memory holds a value  

🧪 Common flow:
1. Compute result → press `M+`  
2. Later → press `MR` to reuse  
3. Done → press `MC`  

---

## 🎨 Theming

Theme variables live under `:root` and `html.dark`

🎨 Key tokens:
- `--accent`, `--accent-600`, `--accent-700`, `--accent-contrast`  
- `--operator`, `--operator-600`  
- `--bg`, `--bg-gradient`, `--surface`, `--surface-2`  
- `--text`, `--text-muted`, `--border`  
- `--radius-md`, `--radius-lg`, `--radius-xl`  
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`  

🛠️ Customize in `index.css`  
✅ Equals button uses accent shades  
➕ Operator buttons use operator shades  

---

## ♿ Accessibility

- 🔍 Focus-visible outlines for keyboard users  
- ⌨️ Summary is keyboard-toggleable  
- 🌀 Reduced motion respected via `prefers-reduced-motion`  
- 🔢 Tabular numerals for readability  
- 🎯 High-contrast states for critical buttons  

📣 For live announcements (e.g., memory changes), use `aria-live` regions

---

## 📁 Project Structure

- `index.html` — Markup for calculator, keys, memory, and history  
- `index.css` — Theme variables, layout, button styles, history dropdown  
- `index.js` — Evaluation logic, events, history/memory state, theme toggle  

---

## 🛠️ Customization

- 📏 Max width: `.calculator`, `.history-panel` (`420px`)  
- 🔘 Key size: `.keys button` height and padding  
- 📐 History height: `#history-list` `max-height` (`220px`, `180px` on small screens)  
- 🎯 Focus ring: `--focus-ring` color/opacity  
- 🎨 Accent/brand: `--accent` in light/dark  
- ➕ Operator style: `--operator` variables and button rules  

💡 Pro tip: Keep hover/active states consistent with semantic meaning

---

## 🌐 Browser Support

- ✅ Chrome, Edge, Firefox, Safari  
- 🌀 Honors reduced motion preferences  
- 🧼 No polyfills required  

---

## ⚡ Performance Notes

- 🧱 No runtime dependencies  
- 🎞️ CSS-only animations, GPU-friendly  
- 🎨 Scroll areas use thin, themed scrollbars  

---

## 🛣️ Roadmap

- 🧪 Scientific functions (sin, cos, tan, log, pow)  
- 💾 History persistence via `localStorage`  
- 🖱️ Click-to-reuse expressions from history  
- 🌍 Internationalization (decimal separators)  
- 🧪 Unit and E2E test coverage  

---


## ❓ FAQ

- ❔ Why `details/summary`?  
  - ✅ Native semantics, keyboard support, screen-reader familiarity  
- 💾 Can I persist history?  
  - Yes — connect `#history-list` to `localStorage` in `index.js`  
- 🎨 How do I change accent color?  
  - Edit `--accent`, `--accent-600`, `--accent-700` in `index.css`  
- ⌨️ Does it support keyboard input?  
  - Yes — digits, operators, `Enter`, `Backspace`, `Clear`  

---

## 🤝 Contributing

1. 🍴 Fork the repo  
2. 🌿 Create a feature branch  
3. 💬 Commit with clear messages  
4. 📬 Open a PR  

✅ Keep UI changes consistent with design tokens and accessibility  
📝 Update README and include a brief test plan for new features  

---

## 📜 License

🆓 MIT License — use, modify, and distribute freely  
📄 Add a LICENSE file for clarity in your repo
