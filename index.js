/**
 * Enhanced Calculator Logic
 * Features:
 * - Expression building and safe evaluation (basic sanitization)
 * - Memory operations: MC, MR, M+, M-
 * - History with recall and clear (stored in localStorage)
 * - Keyboard support: digits, operators, ., Enter(=), Backspace(DEL), Escape(AC)
 * - Light/Dark theme toggle (persisted in localStorage)
 */

(() => {
  const display = document.getElementById('inputBox');
  const lastExprEl = document.getElementById('last-expression');
  const keys = document.getElementById('keys');
  const historyList = document.getElementById('history-list');
  const clearHistoryBtn = document.getElementById('clear-history');
  const historyDetails = document.getElementById('history-details');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const memoryIndicator = document.getElementById('memory-indicator');

  // State
  let expression = '';
  let overwriteNext = false; // after equals, next number starts new expression
  let memory = 0;

  // Persistence keys
  const LS_HISTORY = 'calc:history';
  const LS_THEME = 'calc:theme';
  const LS_MEMORY = 'calc:memory';

  // Load persisted state
  let history = loadHistory();
  memory = loadMemory();
  updateMemoryIndicator();

  // Apply persisted theme
  const initialTheme = (localStorage.getItem(LS_THEME) || 'light');
  setTheme(initialTheme);

  // Initial render
  renderHistory();
  updateDisplay();

  // Event Listeners
  keys.addEventListener('click', onKeyClick);
  document.addEventListener('keydown', onKeyDown);
  clearHistoryBtn.addEventListener('click', clearHistory);
  themeToggleBtn.addEventListener('click', toggleTheme);

  // Utility: Update the main display
  function updateDisplay() {
    display.value = expression || '0';
  }

  // Utility: set last expression text
  function setLastExpressionText(text) {
    lastExprEl.textContent = text || '';
  }

  // Append token to expression
  function appendToExpression(token) {
    if (overwriteNext) {
      expression = '';
      overwriteNext = false;
      setLastExpressionText('');
    }
    // Basic rules to prevent malformed sequences
    if (token === '.' && /(\.\d*|\.)$/.test(getCurrentNumber())) {
      // Disallow multiple decimals in current number
      return;
    }
    expression += token;
    updateDisplay();
  }

  function getCurrentNumber() {
    const match = expression.match(/([0-9.]+)$/);
    return match ? match[1] : '';
  }

  // Delete last character
  function handleDelete() {
    if (overwriteNext) {
      // After result, DEL resets to result expression for editing
      overwriteNext = false;
      setLastExpressionText('');
    }
    expression = expression.slice(0, -1);
    updateDisplay();
  }

  // Clear all
  function handleClear() {
    expression = '';
    overwriteNext = false;
    setLastExpressionText('');
    updateDisplay();
  }

  // Evaluate expression safely
  function handleEquals() {
    if (!expression) return;

    const sanitized = sanitizeExpression(expression);
    if (sanitized == null) {
      // Invalid expression
      setLastExpressionText('Error');
      return;
    }

    let result;
    try {
      // eslint-disable-next-line no-new-func
      result = Function(`"use strict"; return (${sanitized})`)();
      if (!isFinite(result)) throw new Error('Not finite');
    } catch (e) {
      setLastExpressionText('Error');
      overwriteNext = true;
      return;
    }

    const exprText = expression;
    expression = String(result);
    setLastExpressionText(`${exprText} =`);
    updateDisplay();
    overwriteNext = true;

    // Save to history
    addHistoryItem(exprText, result);
  }

  // Sanitize allowed characters/operators and normalize symbols
  function sanitizeExpression(expr) {
    // Normalize any alternative symbols just in case
    expr = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');

    // Only allow digits, operators + - * / % . parentheses and spaces
    const allowed = /^[0-9+\-*/.%() ]+$/;
    if (!allowed.test(expr)) return null;

    // Very basic validation for operator placement
    // Disallow two operators in a row (except minus for negative numbers)
    if (/[+\/*%.]{2,}/.test(expr.replace(/(^|[^\d)])-/g, 'NEG'))) return null;

    // Parentheses balance check
    let depth = 0;
    for (const c of expr) {
      if (c === '(') depth++;
      else if (c === ')') {
        depth--;
        if (depth < 0) return null;
      }
    }
    if (depth !== 0) return null;

    return expr;
  }

  // Memory operations
  function memoryClear() {
    memory = 0;
    persistMemory();
    updateMemoryIndicator();
  }
  function memoryRecall() {
    if (overwriteNext) {
      expression = '';
      overwriteNext = false;
      setLastExpressionText('');
    }
    appendToExpression(String(memory));
  }
  function memoryAdd() {
    const val = currentValueForMemory();
    if (val == null) return;
    memory += val;
    persistMemory();
    updateMemoryIndicator();
  }
  function memorySubtract() {
    const val = currentValueForMemory();
    if (val == null) return;
    memory -= val;
    persistMemory();
    updateMemoryIndicator();
  }
  function currentValueForMemory() {
    if (!expression) {
      const displayNum = Number(display.value);
      return isFinite(displayNum) ? displayNum : 0;
    }
    // Try to evaluate the current expression to a number
    const sanitized = sanitizeExpression(expression);
    if (sanitized == null) return null;
    try {
      // eslint-disable-next-line no-new-func
      const val = Function(`"use strict"; return (${sanitized})`)();
      return Number(val);
    } catch {
      return null;
    }
  }
  function updateMemoryIndicator() {
    memoryIndicator.textContent = memory !== 0 ? 'M' : '';
  }
  function persistMemory() {
    localStorage.setItem(LS_MEMORY, String(memory));
  }
  function loadMemory() {
    const raw = localStorage.getItem(LS_MEMORY);
    const n = raw == null ? 0 : Number(raw);
    return isFinite(n) ? n : 0;
  }

  // History
  function addHistoryItem(expr, result) {
    history.unshift({ expr, result, ts: Date.now() });
    history = history.slice(0, 50); // keep last 50
    saveHistory();
    renderHistory();
  }
  function renderHistory() {
    historyList.innerHTML = '';
    if (!history.length) {
      const li = document.createElement('li');
      li.style.opacity = '0.7';
      li.textContent = 'No history yet';
      historyList.appendChild(li);
      return;
    }
    for (const item of history) {
      const li = document.createElement('li');
      li.style.cursor = 'pointer';
      li.style.padding = '0.25rem 0.5rem';
      li.style.border = '1px solid currentColor';
      li.style.borderRadius = '0.35rem';
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'button');
      li.title = 'Click to recall result';
      li.textContent = `${item.expr} = ${item.result}`;
      li.addEventListener('click', () => {
        expression = String(item.result);
        overwriteNext = true;
        setLastExpressionText(`${item.expr} =`);
        updateDisplay();
        historyDetails.open = false; // collapse history for focus on calc
      });
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') li.click();
      });
      historyList.appendChild(li);
    }
  }
  function clearHistory() {
    history = [];
    saveHistory();
    renderHistory();
  }
  function saveHistory() {
    try {
      localStorage.setItem(LS_HISTORY, JSON.stringify(history));
    } catch {}
  }
  function loadHistory() {
    try {
      const raw = localStorage.getItem(LS_HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  // Theme
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      themeToggleBtn.setAttribute('aria-pressed', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      themeToggleBtn.setAttribute('aria-pressed', 'false');
    }
    localStorage.setItem(LS_THEME, theme);
  }
  function toggleTheme() {
    const current = localStorage.getItem(LS_THEME) || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
  }

  // Click handling for buttons
  function onKeyClick(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    const value = btn.getAttribute('data-value');
    const action = btn.getAttribute('data-action');

    if (value != null) {
      appendToExpression(value);
      return;
    }
    if (action) {
      handleAction(action);
    }
  }

  function handleAction(action) {
    switch (action) {
      case 'clear':
        handleClear();
        break;
      case 'del':
        handleDelete();
        break;
      case 'equals':
        handleEquals();
        break;
      case 'mc':
        memoryClear();
        break;
      case 'mr':
        memoryRecall();
        break;
      case 'm-plus':
        memoryAdd();
        break;
      case 'm-minus':
        memorySubtract();
        break;
      default:
        break;
    }
  }

  // Keyboard support
  function onKeyDown(e) {
    const k = e.key;

    if (isDigit(k)) {
      appendToExpression(k);
      e.preventDefault();
      return;
    }

    if (isOperator(k)) {
      appendToExpression(k);
      e.preventDefault();
      return;
    }

    switch (k) {
      case 'Enter':
      case '=':
        handleEquals();
        e.preventDefault();
        break;
      case 'Backspace':
        handleDelete();
        e.preventDefault();
        break;
      case 'Escape':
        handleClear();
        e.preventDefault();
        break;
      case '.':
        appendToExpression('.');
        e.preventDefault();
        break;
      default:
        // ignore other keys
        break;
    }
  }

  function isDigit(k) {
    return /^[0-9]$/.test(k);
  }
  function isOperator(k) {
    return ['+', '-', '*', '/', '%'].includes(k);
  }
})();