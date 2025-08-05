# GIF Search App

A modern React application for searching and discovering GIFs using the Giphy API. Browse trending GIFs or search for specific content with real-time results.

## Features

- 🔥 **Trending GIFs**: Displays popular trending GIFs on initial load
- 🔍 **Search Functionality**: Real-time search for GIFs by keyword
- ⚡ **Fast Performance**: Built with React + TypeScript + Vite for optimal development experience
- 📱 **Responsive Design**: Works seamlessly across different screen sizes

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

- **Browse Trending**: When you first load the app, you'll see trending GIFs
- **Search GIFs**: Use the search bar to find GIFs by keyword
- **Real-time Results**: Search results update as you type

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