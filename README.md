# Modern Personal Dashboard (Refactored)

> Refactored by **Linkium-suki** with ❤️

This repository contains a complete rewrite of the personal homepage/dashboard application. The goal was to modernize the tech stack, improve maintainability, and enhance the visual experience while preserving the core functionality.

## 🚀 Key Improvements (PR Notes)

This refactor addresses previous pain points including outdated technology, difficulty in customization, and lack of visual polish.

### 🛠 Tech Stack
- **Core:** React 18 + TypeScript (migrated from vanilla JS/HTML).
- **Styling:** Tailwind CSS (utility-first, responsive).
- **Icons:** Lucide React (vector icons).
- **Build:** Vite (fast HMR and optimized production build).

### ✨ New Features
1.  **Dynamic "Monet" Theming:**
    -   Implemented a client-side color extraction engine. The UI accent colors now automatically adapt to the dominant color of the daily background image.
2.  **Dashboard Experience:**
    -   Replaced the static layout with a glassmorphism "Bottom Sheet" dashboard.
    -   Includes tabbed navigation for "About" and "Projects".
3.  **Enhanced APIs:**
    -   **Images:** Bing Daily Image (High Res) with metadata parsing.
    -   **Quotes:** Integrated `Hitokoto` (Chinese) and `TimelessQ` (English) APIs.
    -   **Robustness:** Added graceful fallbacks and CORS handling strategies.
4.  **Customization:**
    -   Added a **Settings Panel**. You can now change your name, bio, quote source, and more directly in the UI.
    -   Changes are persisted via `src/constants.ts`.
5.  **Typography:**
    -   Integrated Google Fonts (`Inter`, `Noto Serif SC`, `JetBrains Mono`) for superior readability.

### 📦 Deployment
This project is optimized for static hosting providers.

**GitHub Pages / Cloudflare Pages:**
1.  Run `npm run build`.
2.  Serve the `dist` folder.

### 🔧 Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

*Original author, please review the `constants.ts` file to permanently update the default project list and bio if you prefer hardcoded defaults over the new Settings UI.*
