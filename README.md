# Mudeng Web (Landing Page)

Mudeng Web is the main landing page for MUDENG (Multimedia Digital Engagement) STT Terpadu Nurul Fikri. It introduces the community, showcases core team members, highlights the latest digital works (Karya), and links to upcoming creative events.

This project is built using **React** with **Vite** for blazing fast development, styled beautifully with **Tailwind CSS v4**, and animated smoothly using **Framer Motion**.

## 🚀 Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/)
- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Typography:** [Fontsource](https://fontsource.org/) (Anton & Plus Jakarta Sans)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Asset Processing:** Node.js scripts using [Sharp](https://sharp.pixelplumbing.com/)

## 📂 Project Structure

- `src/`: Contains all the application source code.
  - `components/`: Reusable React components (`Navbar.tsx`, `Hero.tsx`, `Event.tsx`, `AllEventsPopup.tsx`, etc.).
  - `assets/`: Static assets imported directly into the application (fonts, images, svgs).
  - `index.css`: Global styles and Tailwind imports.
  - `App.tsx`: Main application entry point orchestrating all sections.
  - `main.tsx`: React DOM rendering root.
- `scripts/`: Custom Node.js scripts for fetching and optimizing Figma/Karya assets (`fetch-figma-assets.mjs`).
- `public/`: Static assets directly served by Vite without processing.

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. This project uses `pnpm` as its package manager.

```bash
npm install -g pnpm
```

### Installation

1. Navigate to the `web` directory (assuming you are at the project root):

    ```bash
    cd web
    ```

2. Install the project dependencies:

    ```bash
    pnpm install
    ```

### Fetching Assets (Optional)

If you need to synchronize or fetch the latest image assets (like Karya highlights or Figma vectors) before running the site:

```bash
pnpm run fetch-assets
```

### Running the Development Server

Start the Vite development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) with your browser to see the result. The development server supports Hot Module Replacement (HMR).

### Building for Production

To compile TypeScript and build an optimized production bundle:

```bash
pnpm build
```

To preview the built production site locally:

```bash
pnpm preview
```

## 🎨 Design System

This website implements a striking, modern aesthetic:
- **Gradients and Glassmorphism:** Deep blues, purples, and semi-transparent blur effects.
- **Micro-interactions:** Interactive hover states and scroll-driven animations built with `framer-motion`.
- **Typography:** Strong, bold headings using the `Anton` font, paired with clean, readable `Plus Jakarta Sans` for body text.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Feel free to explore the code, report bugs, or submit pull requests.
