# Gaming Award Course - React + TypeScript + Vite Project

## Project Overview
This is a React application built with TypeScript and Vite, featuring TailwindCSS for styling. The project appears to be related to a gaming award course with extensive multimedia assets including videos, images, audio, and fonts.

## Architecture
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.10
- **Styling**: TailwindCSS with PostCSS
- **Development Server**: Configured to run on port 5000 with 0.0.0.0 host for Replit compatibility

## Project Structure
- `/src/` - Main application source code
- `/public/` - Static assets (images, videos, audio, fonts)
- Vite configuration with Replit-specific host settings

## Development Setup
- **Workflow**: "Frontend Server" runs `npm run dev`
- **Port**: 5000 (configured for Replit proxy compatibility)
- **Host**: 0.0.0.0 to support Replit's iframe proxy system

## Deployment Configuration
- **Type**: Autoscale (suitable for static frontend)
- **Build**: `npm run build` 
- **Production**: `npx vite preview --host 0.0.0.0 --port 5000`

## Recent Setup Changes (Sept 18, 2025)
- Configured Vite for Replit environment with proper host/port settings
- Set up development workflow on port 5000
- Configured deployment for autoscale with production build
- Dependencies installed and project successfully running in Replit

## Assets
The project includes rich multimedia content:
- Video files for hero sections and features
- High-quality images (WebP format)
- Custom fonts (Circular Web, Robert, Zentry)
- Audio assets

## Status
✅ Successfully imported and configured for Replit environment
✅ Development server running without errors
✅ Deployment configuration completed