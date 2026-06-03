## Learning Dashboard
#Overview

This project is a responsive Learning Dashboard built with Next.js 15, Tailwind CSS, Framer Motion, and Supabase.

The dashboard displays learning courses in a Bento Grid layout with animated course cards, progress tracking, and responsive design.

#Tech Stack
Next.js (App Router)
React
Tailwind CSS
Framer Motion
Supabase
Lucide React Icons
Architecture

#The application follows a component-based architecture:

Data Layer

Supabase is used as the backend database. Course information is stored in the courses table and fetched on the server.

Layout Layer

The BentoGrid component is responsible for arranging dashboard tiles using CSS Grid and responsive breakpoints.

Presentation Layer

#Reusable UI components are used to render individual pieces of the interface:

HeroTile
ActivityTile
CourseCard
ProgressBar
MobileNav
Sidebar

This separation improves maintainability and scalability.

Server / Client Component Split
Server Components

#app/page.js

Fetches course data from Supabase
Reduces client-side JavaScript
Improves performance and initial load time
Client Components

Components using animations or browser interactions are marked with "use client":

BentoGrid
CourseCard
ProgressBar
MobileNav

These components require client-side rendering because they use Framer Motion and interactive UI behavior.

Features
Responsive Bento Grid layout
Framer Motion animations
Dynamic Lucide icon rendering
Supabase integration
Course progress tracking
Mobile-friendly navigation
