# GIF Search App

A React application for browsing and searching GIFs using the Giphy API. View trending GIFs or search for specific content.

## Features

- Display trending GIFs on initial load
- Real-time search functionality
- Built with React, TypeScript, and Vite
- Integration with Giphy API

## Tech Stack

- **React 18** with hooks for state management
- **TypeScript** for type safety
- **Vite** for fast development and building
- **Giphy API** for GIF data
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- A Giphy API key (get one free at [developers.giphy.com](https://developers.giphy.com))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd giphy-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Giphy API key:
```
VITE_GIPHY_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

- Browse trending GIFs displayed on initial load
- Use the search bar to find GIFs by keyword
- Search results update in real-time as you type

## API Integration

This app integrates with the Giphy API to fetch:
- Trending GIFs via `/v1/gifs/trending` endpoint
- Search results via `/v1/gifs/search` endpoint

## Project Structure

```
src/
├── components/
│   ├── Gif.tsx          # Individual GIF display component
│   └── Search.tsx       # Search input component
├── types.ts             # TypeScript type definitions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Feel free to submit issues and enhancement requests!