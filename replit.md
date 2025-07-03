# Celebration Event Website

## Overview

This is a modern, responsive celebration website built to honor the double milestone: the 25th wedding anniversary of Mr. Sanjay Kumar and Mrs. Maya Devi, and the 11th birthday of Shresth. The application features an elegant design with smooth animations, interactive galleries, and a countdown timer to build excitement for the upcoming celebration.

## System Architecture

The application follows a modern React architecture with TypeScript and Tailwind CSS:

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
- Mobile-responsive hamburger menu with animated toggle
- Active section highlighting based on scroll position
- Vanilla JavaScript event handling for navigation interactions

### Event Sections
1. **Hero Section**: Eye-catching landing area with celebration announcement and gradient background
2. **Anniversary Section**: Dedicated area for the 25th anniversary celebration with milestone details
3. **Birthday Section**: Special section for the 11th birthday celebration with live countdown timer
4. **Event Place Section**: Venue information, amenities, and location details
5. **Gallery Section**: Tabbed photo gallery with categories (Anniversary, Birthday, Family)

### Interactive Features
- Live countdown timer for event anticipation using JavaScript Date objects
- Intersection Observer API for scroll-triggered animations
- Image galleries with category filtering via JavaScript
- Smooth scrolling navigation with CSS scroll-behavior
- Responsive design for all devices using CSS Grid and Flexbox

### Animation System
- CSS keyframes for smooth fade-in and slide animations
- JavaScript-triggered animations on scroll
- Hover effects and transitions for interactive elements
- Animated scroll indicator and mobile menu transitions

## Technical Implementation

### JavaScript Architecture
1. **Event-Driven**: DOM event listeners for user interactions
2. **Modular Functions**: Separate initialization functions for each feature
3. **Animation Control**: Intersection Observer for performance-optimized animations
4. **State Management**: Simple JavaScript variables for UI state

### CSS Architecture
1. **CSS Variables**: Consistent theming with custom properties
2. **Mobile-First**: Responsive design with progressive enhancement
3. **Animation Library**: CSS keyframes for smooth transitions
4. **Component Classes**: Reusable utility classes for consistent styling

### External Dependencies
- **Lucide Icons**: CDN-loaded icon library for consistent iconography
- **Google Fonts**: Playfair Display and Inter font families
- **No Build Process**: Direct HTML/CSS/JS files for simplicity

## Deployment Strategy

### Static Hosting
- Single HTML file with embedded CSS and JavaScript
- No build process required
- Can be hosted on any static hosting service
- No server-side dependencies

### Performance Optimizations
- Lazy loading for gallery images
- Intersection Observer for efficient scroll animations
- Minimal external dependencies
- Optimized CSS with custom properties

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Converted from React to pure HTML/CSS/JavaScript  
- July 03, 2025. Updated celebration year from 2024 to 2025, changed hero text color from white to dark slate for better readability
- July 03, 2025. Converted back to React at user request with all 2025 updates and improved color scheme