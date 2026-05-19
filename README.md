# React Job Card Dashboard

A simple interactive React project that displays a collection of job cards using component props and JSON-style data.

## Features

- Responsive card layout with a modern glassy UI
- Interactive hover effects and polished buttons
- Dynamic job data passed into reusable `Card` components
- Uses Vite for fast development and production builds

## Project Structure

- `src/App.jsx` - main app component that loads job data and renders cards
- `src/Components/Card.jsx` - reusable card component for job listings
- `src/index.css` - project styling and card UI design
- `src/main.jsx` - app entry point

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the project dependencies.

### `npm run dev`

Starts the Vite development server.

### `npm run build`

Bundles the app for production.

### `npm run preview`

Serves the built app locally for testing.

## Usage

1. Clone or open the project in your editor.
2. Install dependencies with `npm install`.
3. Run the app locally with `npm run dev`.
4. Open the provided local URL in your browser.

## Customization

- Update the job data in `src/App.jsx` to add or edit listings.
- Edit `src/index.css` to change card colors, spacing, and hover behavior.
- Modify `src/Components/Card.jsx` to adjust card layout and content.

## Notes

- The project uses Vite and React 18+.
- Job cards are rendered using props passed down from the app.
- The current styling is designed for a modern dark/background presentation.
 