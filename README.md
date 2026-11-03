# Aura — Local Food Discovery Platform

Aura is a React + Vite web application for discovering restaurants, browsing menu experiences, and managing restaurant listings. The project is built as a front-end prototype/demo for a local food discovery platform that combines restaurant discovery, curated recommendations, user profiles, and restaurant-owner tools.

## What the project does

The app allows users to:

- browse a home page with restaurant discovery messaging and featured content
- explore restaurants by category or keyword search
- view restaurant details, descriptions, ratings, and menu information
- open a restaurant menu page to review dishes and categories
- sign up or log in as a customer or restaurant owner
- register and manage restaurant information through a multi-step form
- access a restaurant dashboard with overview, menu, reviews, and analytics
- save favorite restaurants and track liked items in a personal profile

## Project purpose

This repository demonstrates a food-discovery experience similar to a curated dining marketplace. It is designed to showcase UI flows for:

- restaurant browsing and search
- restaurant listing and onboarding
- owner-side dashboards
- customer engagement features such as saving restaurants and reviewing experiences

It uses mock data instead of a production backend, so the app is primarily a UI prototype rather than a fully deployed service.

## Tech stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Recharts for dashboard analytics
- Lucide React icons
- JSON Server for mock API data

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the mock API

```bash
npm run mock-api
```

This uses `json-server` with the dataset in `mock-api/db.json`.

### Run the app

```bash
npm run dev
```

The app will typically run on the Vite default development port, usually http://localhost:5173.

## Available scripts

```bash
npm run dev        # start the Vite frontend app
npm run build      # build production assets
npm run preview    # preview the production build
npm run lint       # run ESLint
npm run mock-api   # start the mocked JSON API server
```

## Project structure

```text
src/
  App.jsx                 # route configuration and app providers
  pages/                  # pages for home, explore, login, signup, profile, dashboard
  components/             # UI components for nav, hero, restaurant cards, dashboard modules
  api/                    # API functions for auth, restaurant, menu, reviews, analytics
  context_API/            # React contexts for user and restaurant state
  assets/                 # images and logos
mock-api/
  db.json                 # mock restaurant, user, review, and menu data
```

## Notes

- The application uses mock data served locally through `json-server`.
- There is no real authentication or database persistence in this repository.
- The project focuses on frontend UX and flow demonstration for a restaurant discovery platform.

## License

This project is licensed under the terms in the `LICENSE` file.
