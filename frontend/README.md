# Job Hunt Frontend

A modern React frontend for the Job Hunt application, providing a seamless user experience for job tracking, resume building, and more.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Packages Used](#packages-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Scripts](#project-scripts)
- [License](#license)

---

## Features

- User authentication (signup, login, OTP verification, password reset)
- Job tracking dashboard with drag-and-drop
- Resume and template builder/editor
- Cover letter management
- Responsive, modern UI
- Integration with backend APIs

---

## Tech Stack

- **React** (Vite)
- **JavaScript (ES6+)**
- **React Router** (routing)
- **Axios** (API requests)
- **Tailwind CSS** (styling)
- **Zustand** (state management)
- **Vite** (build tool)

---

## Folder Structure

```
frontend/
│
├── public/                # Static assets (images, SVGs, etc.) served as-is
│   └── assets/            # Auth images, icons, and other public resources
│
├── src/                   # Main source code for the React app
│   ├── assets/            # App-specific images and SVGs
│   ├── components/        # Reusable UI components (inputs, navbars, footers, etc.)
│   ├── constants/         # Static data/constants (e.g., city lists, template configs)
│   ├── lib/               # Utility libraries and helper functions
│   ├── pages/             # Top-level pages and their subcomponents
│   │   ├── auth-pages/        # Authentication-related pages and components
│   │   ├── extension-page/    # Extension info and related components
│   │   ├── home-page/         # Landing/home page and its sections
│   │   ├── JobTracking/       # Job tracking dashboard and modals
│   │   ├── my-account/        # User account/profile management
│   │   ├── recruiters-page1/  # Recruiter-related pages
│   │   ├── recruiters-page2/  # Recruiter-related pages
│   │   └── resume-builder/    # Resume builder/editor
│   ├── routes/            # Route guards and route definitions
│   ├── services/          # API service modules for backend communication
│   ├── store/             # Global state management (e.g., Zustand stores)
│   ├── styles/            # Custom style definitions (e.g., JS style objects)
│   └── utils/             # Utility functions (e.g., axios instance, toast helpers)
│
├── .env                   # Environment variables for frontend config
├── index.html             # Main HTML template
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite build configuration
└── README.md              # Project documentation
```

---

## Packages Used

- **react** - UI library
- **react-router-dom** - Routing
- **axios** - HTTP requests
- **zustand** - State management
- **tailwindcss** - Utility-first CSS framework
- **clsx** - Conditional classNames
- **vite** - Build tool
- **eslint** - Linting
- **@headlessui/react** - Accessible UI primitives
- **react-icons** - Icon library
- **react-hot-toast** - Toast notifications

*(See `package.json` for the full list and versions.)*

---

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Variantlabs1/Project--js.git
   cd frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your values.

4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will run on [http://localhost:5173](http://localhost:5173) by default.

---

## Environment Variables

Create a `.env` file in the root directory. Example variables:

```
VITE_API_URL=http://localhost:5000/api
```

---

## Project Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

