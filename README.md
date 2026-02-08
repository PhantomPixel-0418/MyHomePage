<a id="readme-top"></a>

<br />
<div align="center">

<h3 align="center">MyHomePage</h3>

  <p align="center">
    A modern, minimal personal homepage/dashboard.
    <br /><br />
    Integrates Bing daily wallpaper, curated quotes (Chinese & English), a clock, and a customizable settings panel to present a clean daily dashboard.
  </p>

  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]

  <p align="center">
    <a href="https://phantompixel-0418-myhomepage.pages.dev/"><strong>Explore the site »</strong></a>
</div>

> Note: This project was refactored (see PR branch) to modernize the stack — React 18 + TypeScript + Vite.

## About

MyHomePage is a lightweight personal homepage/dashboard that focuses on minimalism and visual polish. It displays a daily background image (Bing), rotating quotes (Chinese classic poetry and English inspirational quotes), and useful widgets like a clock and a configurable bottom-sheet dashboard.

This repository contains a complete rewrite to improve maintainability, customization, and UX.

## Key Improvements (refactor)

- Modern tech: React 18 + TypeScript, Tailwind CSS, Vite
- Dynamic "Monet" theming: accent colors adapt to the daily background image
- Glassmorphism bottom-sheet dashboard with tabbed About / Projects
- Quotes: integrated Hitokoto (Chinese) and TimelessQ (English) with graceful fallbacks
- Settings panel: change quote source, theme color, and other preferences (persisted to localStorage)
- Improved typography: `Inter`, `Noto Serif SC`, `JetBrains Mono`

## Roadmap / Features

- Bing Daily Image (high-res background with metadata)
- Quotes: Chinese classic poetry & English inspirational quotes
- Clock & date display
- Settings panel (customize name, bio, theme, quote source)
- Planned: Weather information and climate tips

See the repository issues for proposed features and known issues: <https://github.com/PhantomPixel-0418/MyHomePage/issues>

## Development

```bash
# Install dependencies
npm install

# Start development server with Vite
npm run dev

# Build for production
npm run build
```

## Deployment

This project is optimized for static hosting (GitHub Pages / Cloudflare Pages). Build with `npm run build` and serve the `dist` folder.

## API & Acknowledgements

The project relies on a few third-party resources and APIs:

- World Time API — <http://worldtimeapi.org> (initial time accuracy)
- Hitokoto — <https://hitokoto.cn/> (Chinese poetry)
- TimelessQ — <https://api.timelessq.com> (English daily quotes)
- Bing Wallpaper / Bing image sources (various public endpoints)

Fonts and assets referenced in the original project:

- Google fonts: `Inter`, `Noto Serif SC`, `JetBrains Mono`

Thanks to open-source projects and API providers that made this possible.

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check issues and open a PR.

## License

Distributed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

---

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/PhantomPixel-0418/MyHomePage.svg
[contributors-url]: https://github.com/PhantomPixel-0418/MyHomePage/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PhantomPixel-0418/MyHomePage.svg?style
[forks-url]: https://github.com/PhantomPixel-0418/MyHomePage/network/members
[stars-shield]: https://img.shields.io/github/stars/PhantomPixel-0418/MyHomePage.svg?style
[stars-url]: https://github.com/PhantomPixel-0418/MyHomePage/stargazers
[issues-shield]: https://img.shields.io/github/issues/PhantomPixel-0418/MyHomePage.svg
[issues-url]: https://github.com/PhantomPixel-0418/MyHomePage/issues
[license-shield]: https://img.shields.io/github/license/PhantomPixel-0418/MyHomePage.svg
[license-url]: https://github.com/PhantomPixel-0418/MyHomePage/blob/master/LICENSE.txt
