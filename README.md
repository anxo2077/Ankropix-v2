# Ankropix Website (React + Bootstrap)

Repository: https://github.com/anxo2077/Ankropix-v2
page: https://anxo2077.github.io/Ankropix-v2/  
Original Project: https://github.com/anxo2077/Ankropix

Rebuilt version of the original Ankropix site using React and Bootstrap 5.  
It represents Ankropix, a fictional hosting service for gamers.

## Description

This is a rebuild of Project 1 using modern frameworks and tools.  
The original was built with plain HTML, CSS, and JavaScript.  
This version uses React with Vite and Bootstrap 5.

Includes:

- Home page with animated stats counter.
- Services page with hosting options.
- Pricing page with plans displayed side by side.
- Gallery with interactive image slider using React state.
- About page with information about the project.
- Contact page with inline form validation.

## Frameworks and Libraries Used

- **React** - component-based UI and routing with React Router
- **Bootstrap 5** - responsive layout, navbar with mobile hamburger menu
- **Vite** - build tool and dev server

## Requirements

- Node.js installed
- npm

## How to Run

1. Clone the repository.
2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. Open the local URL shown in the terminal.

## Project Structure

- `src/components/` - Reusable components (Navbar, Footer)
- `src/pages/` - One file per page (Home, Services, Pricing, Gallery, About, Contact)
- `src/App.jsx` - Main app with React Router setup
- `src/index.css` - Global styles and color variables
- `public/` - Images

## Improvements Over Project 1

- Single Page App with React Router (no full page reloads)
- Navbar is now responsive with hamburger menu on mobile
- Pricing cards are side by side instead of stacked
- Form errors show inline instead of using alert()
- Gallery and stats use React state instead of direct DOM manipulation
- Code is organized into reusable components
