# Swegon Recruitment Code Test - Frontend

A comprehensive React TypeScript application built with Vite, featuring a modern UI with Styled Components, routing, and local state management.

## 🚀 Features

- **Modern React 18** with TypeScript for type safety
- **Vite** for lightning-fast development and building
- **Styled Components** for component-level styling with theming
- **React Router** for client-side routing
- **Local State Management** using hooks (useState, useReducer, useContext)
- **Comprehensive Testing** with Vitest and React Testing Library
- **Form Handling** with React Hook Form and Zod validation
- **Chart Visualization** with Chart.js
- **Icon Library** with React Icons
- **Toast Notifications** with React Toastify
- **Dark Mode Support** with theme toggling
- **Responsive Design** with mobile-first approach
- **ESLint & Prettier** for code quality and formatting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, Input, Card, etc.)
│   └── layout/         # Layout components (Header, Navigation, Footer)
├── pages/              # Page components with local state
│   ├── Home/           # Home page
│   ├── Products/       # Products listing with filters
│   ├── ProductDetail/  # Individual product details
│   ├── Calculator/     # Ventilation calculator
│   └── NotFound/       # 404 page
├── services/           # API service layer
│   └── api/           # API client configuration
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   ├── formatting/    # Date, number, currency formatters
│   ├── validation/    # Validation utilities
│   ├── calculations/  # Math and conversion utilities
│   └── storage/       # LocalStorage utilities
├── context/            # React Context providers (Theme, Notifications)
├── router/             # Routing configuration
├── styles/             # Global styles and theme
└── assets/             # Static assets (images, icons)
```

## 🛠️ Tech Stack

### Core
- **React** 18.2.0 - UI library
- **TypeScript** 5.3.3 - Type safety
- **Vite** 5.0.11 - Build tool
- **Styled Components** 6.1.8 - CSS-in-JS styling

### Routing & State
- **React Router DOM** 6.21.0 - Client-side routing
- **React Hook Form** 7.49.3 - Form management
- **Zod** 3.22.4 - Schema validation

### UI & Visualization
- **Chart.js** 4.4.1 + **react-chartjs-2** 5.2.0 - Charts
- **React Icons** 5.0.1 - Icon library
- **React Toastify** 10.0.4 - Toast notifications

### HTTP & Data
- **Axios** 1.6.5 - HTTP client
- **date-fns** 3.0.6 - Date manipulation
- **classnames** 2.5.1 - Conditional classes

### Testing & Quality
- **Vitest** 1.2.0 - Unit testing
- **React Testing Library** 14.1.2 - Component testing
- **ESLint** 8.56.0 - Code linting
- **Prettier** 3.2.4 - Code formatting

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Swegon.Recruitment.CodeTest.Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Lint code
- `npm run lint:fix` - Lint and fix code
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_API_TIMEOUT=30000
VITE_ENABLE_MOCK_DATA=true
```

## 🎨 Styling

The application uses **Styled Components** for styling with the following features:

- **Theme Support**: Light and dark themes with easy toggling
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component-Scoped Styles**: No CSS conflicts or naming issues
- **Dynamic Styling**: Props-based conditional styling
- **Global Styles**: Consistent base styles across the app

### Theme Structure

```typescript
{
  colors: {
    primary, secondary, success, error, warning, info,
    text, textLight, heading, background, border, etc.
  },
  shadows: { small, medium, large, xl },
  borderRadius: { small, medium, large, xl, round },
  spacing: { xs, sm, md, lg, xl, xxl },
  breakpoints: { xs, sm, md, lg, xl }
}
```

## 🧪 Testing

Run tests with:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test -- --watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## 📦 Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The optimized files will be in the `dist/` directory.

## 🏗️ Architecture & Patterns

### Component Patterns

- **Functional Components**: All components use modern React functional patterns
- **Custom Hooks**: Reusable logic extracted into custom hooks
- **Styled Components**: Component-level styling with props and themes
- **Type Safety**: Full TypeScript coverage for props and state
- **Single Responsibility**: Each component has a focused purpose

### State Management

- **Local State**: `useState` for simple component state
- **Complex State**: `useReducer` for complex state logic
- **Shared State**: React Context for truly global data (theme, auth, notifications)
- **No Redux**: Lightweight state management without external libraries

### Code Organization

- **Feature-Based**: Related components grouped by feature
- **Separation of Concerns**: UI, logic, and data layers separated
- **Reusability**: Common components and utilities extracted
- **Type Definitions**: Centralized TypeScript types
- **Service Layer**: API calls abstracted in service files

## 🌟 Key Features Implementation

### Products Page
- Product listing with filtering and sorting
- Category-based filtering
- Search functionality
- Pagination
- Responsive grid layout

### Product Detail Page
- Detailed product information
- Specifications display
- Features list
- Back navigation
- Related products

### Calculator Page
- Multi-step form for input
- Real-time calculations
- Results visualization with charts
- Personalized recommendations
- Form validation

### Theme Switching
- Light/dark mode toggle
- Persistent theme selection
- Smooth transitions
- System-wide theme application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Swegon recruitment process.

## 👥 Authors

Created as part of the Swegon Recruitment Code Test.

## 🐛 Known Issues

None at this time. Please report issues via the issue tracker.

## 📞 Support

For questions or support, please contact the Swegon recruitment team.

---

**Built with ❤️ using React, TypeScript, and Styled Components**
