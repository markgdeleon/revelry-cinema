# Revelry Cinema - Portfolio Website

## Overview

Revelry Cinema is a professional portfolio website for video production and photography services. The application showcases cinematic work through a dark, immersive interface inspired by premium portfolio sites and streaming platforms. Built as a full-stack web application with React frontend and Express backend, it enables potential clients to view work samples, learn about services, and submit contact inquiries or newsletter signups.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application with home and 404 routes)

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component structure follows atomic design principles with reusable UI primitives in `client/src/components/ui/`

**Design System**
- Dark-first cinematic aesthetic with carefully crafted color palette (deep charcoal backgrounds, warm amber accents)
- Typography hierarchy using Inter (sans-serif) and Playfair Display (serif) from Google Fonts
- Design tokens defined in CSS variables for consistent theming across light/dark modes
- Generous whitespace and photography-first layouts inspired by Apple, Netflix, and Behance

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management, caching, and API communication
- Form state managed via **React Hook Form** with **Zod** schema validation
- Toast notifications for user feedback using custom toast hook

**Key Features**
- Hero section with full-screen cinematic imagery
- Portfolio gallery with category filtering (video/photo/commercial/events)
- Service showcase cards highlighting video production, photography, and storytelling
- Contact form with validation for project inquiries
- Newsletter signup functionality
- Responsive navigation with smooth scroll-to-section behavior
- Social media integration (Instagram, Facebook, TikTok, X/Twitter)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for REST API endpoints
- Middleware for JSON parsing, URL encoding, and request/response logging
- Custom error handling middleware for consistent error responses

**API Endpoints**
- `POST /api/contact` - Accepts contact inquiry submissions with validation
- `POST /api/newsletter` - Handles newsletter signup requests with duplicate email detection

**Data Validation**
- **Zod schemas** defined in shared directory for runtime validation
- Validation schemas enforce minimum lengths, email format, and required fields
- Error responses include user-friendly validation messages via `zod-validation-error`

**Development vs Production**
- Development: Vite middleware integrated with Express for HMR and asset serving
- Production: Static file serving from build output directory
- Environment-aware configuration via `NODE_ENV`

### Data Storage Solutions

**Current Implementation**
- **In-Memory Storage** (`MemStorage` class) for development and prototyping
- Stores contact inquiries and newsletter signups in JavaScript Maps with UUID-based IDs
- Implements `IStorage` interface for future database integration flexibility

**Database Schema (Prepared for PostgreSQL)**
- **Drizzle ORM** configured with PostgreSQL dialect
- Two main tables defined in `shared/schema.ts`:
  - `contact_inquiries`: id, name, email, project_type, message, created_at
  - `newsletter_signups`: id, email (unique), created_at
- Schema uses UUID primary keys with automatic generation
- Ready for migration to **Neon Database** (serverless Postgres) based on dependencies

**Data Models**
- Type-safe models generated from Drizzle schema
- Insert schemas derived from table definitions with Zod validation
- Separation between insert types (user input) and select types (database records)

### Authentication and Authorization

**Current State**
- No authentication system implemented (public-facing portfolio site)
- All endpoints are publicly accessible
- Contact and newsletter forms are open to anonymous submissions

**Considerations**
- Future admin panel would require authentication for viewing submissions
- Potential spam prevention mechanisms needed (rate limiting, CAPTCHA)

### External Dependencies

**Database & ORM**
- **@neondatabase/serverless** - Serverless PostgreSQL client for Neon Database
- **Drizzle ORM** - Type-safe ORM with migration support
- **drizzle-kit** - CLI tool for schema management and migrations
- **connect-pg-simple** - PostgreSQL session store (prepared for future session management)

**UI & Styling**
- **Radix UI** - Comprehensive set of accessible, unstyled UI primitives (20+ component packages)
- **Tailwind CSS** - Utility-first CSS framework with PostCSS processing
- **class-variance-authority** - Utility for building variant-based component APIs
- **tailwind-merge** - Smart Tailwind class merging utility
- **cmdk** - Command palette component
- **embla-carousel-react** - Carousel/slider functionality
- **lucide-react** - Icon library
- **react-icons** - Additional icons (social media logos)

**Forms & Validation**
- **react-hook-form** - Performant form state management
- **@hookform/resolvers** - Validation resolver integration
- **zod** - Schema validation library
- **drizzle-zod** - Zod schema generation from Drizzle tables
- **zod-validation-error** - User-friendly validation error formatting

**Data Fetching & State**
- **@tanstack/react-query** - Async state management and caching
- **wouter** - Minimal routing library (1-2KB alternative to React Router)

**Development Tools**
- **Vite plugins** from Replit for runtime error overlay, dev banner, and cartographer
- **TypeScript** for type safety across client, server, and shared code
- **tsx** for running TypeScript in Node.js development server

**Build & Production**
- **esbuild** - Fast bundler for server code in production builds
- **autoprefixer** - CSS vendor prefixing

**Asset Management**
- Generated placeholder images stored in `attached_assets/generated_images/`
- Images imported directly into components via Vite's asset handling
- Future integration may use cloud storage (Cloudinary, S3) for user-uploaded content

**Social Media Integration**
- Hardcoded social media links (Instagram, Facebook, TikTok, X/Twitter)
- Links point to placeholder accounts (@revelry_cinema, @revelrycinema)
- No API integration; purely navigational links