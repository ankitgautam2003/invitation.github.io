# Celebration Event Website

## Overview

This is a modern, responsive web application built to celebrate a double milestone: the 25th wedding anniversary of Mr. Sanjay Kumar and Mrs. Maya Devi, and the 11th birthday of Shresth. The application features an elegant design with smooth animations, interactive galleries, and a countdown timer to build excitement for the upcoming celebration.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Styling System
- **Design System**: Custom celebration theme with anniversary and birthday color schemes
- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**: Custom CSS variables for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Navigation System
- Fixed navigation bar with smooth scrolling between sections
- Mobile-responsive hamburger menu
- Active section highlighting based on scroll position

### Event Sections
1. **Hero Section**: Eye-catching landing area with celebration announcement
2. **Anniversary Section**: Dedicated area for the 25th anniversary celebration
3. **Birthday Section**: Special section for the 11th birthday celebration with countdown timer
4. **Event Place Section**: Venue information and amenities
5. **Gallery Section**: Tabbed photo gallery with categories (Anniversary, Birthday, Family)

### Interactive Features
- Countdown timer for event anticipation
- Intersection observer for scroll-triggered animations
- Image galleries with category filtering
- Smooth scrolling navigation
- Responsive design for all devices

### UI Components
- Comprehensive set of accessible components from Radix UI
- Custom styled components using class-variance-authority
- Toast notifications for user feedback
- Tooltips and popovers for enhanced UX

## Data Flow

### Client-Side Data Flow
1. React components manage local UI state
2. React Query handles server state and caching
3. Custom hooks manage reusable logic (countdown, intersection observer)
4. Framer Motion provides animation state management

### Server-Side Data Flow
1. Express routes handle API requests
2. Storage interface abstracts data persistence
3. In-memory storage provides immediate functionality
4. Drizzle ORM ready for PostgreSQL integration

### Schema Design
- User entity with username and password fields
- Extensible schema structure for future event-related data
- Type-safe database operations with Drizzle and Zod validation

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Animations**: Framer Motion, Embla Carousel
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form with Hookform Resolvers
- **Database**: Drizzle ORM, Neon Database driver
- **Validation**: Zod for schema validation
- **Utilities**: date-fns for date manipulation

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Development**: TSX for TypeScript execution, Replit plugins

## Deployment Strategy

### Development Environment
- Vite dev server with HMR (Hot Module Replacement)
- TypeScript checking with incremental builds
- Replit-specific plugins for development experience

### Production Build
- Vite builds the client-side application
- esbuild bundles the server for Node.js deployment
- Static assets served from dist/public directory
- Environment variables for database configuration

### Database Setup
- Drizzle migrations in the migrations directory
- PostgreSQL schema defined in shared/schema.ts
- Environment variable (DATABASE_URL) for connection configuration

### Hosting Considerations
- Static client files can be served by any CDN
- Node.js server requires environment with PostgreSQL access
- Session storage requires PostgreSQL connection
- Environment variables needed for database connection

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup