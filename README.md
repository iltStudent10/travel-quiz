# Travel Quiz

A lightweight React + TypeScript quiz app that determines a user's travel style based on five multiple-choice questions.

## Tech Stack

- React 19
- TypeScript
- Vite
- ESLint
- Vitest

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

The app will be available at the local Vite URL shown in your terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — type-check and create production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project
- `npm run test` — run tests in watch mode
- `npm run test:run` — run tests once (CI-friendly)

## Project Structure

```text
src/
  App.tsx                  # UI flow: start, questions, result view
  quiz/
    quizData.ts            # Questions, answer mapping, and result content
    quizLogic.ts           # Score calculation and quiz completion logic
    quizTypes.ts           # Shared TypeScript types for quiz domain
```

## How Scoring Works

- Each answer increments one travel style score.
- After the last question, the highest-scoring style is selected.
- The final card displays the winning style and a score breakdown.

## Customize the Quiz

- Edit questions/options in `src/quiz/quizData.ts` (`quizQuestions`).
- Edit result titles/descriptions in `src/quiz/quizData.ts` (`travelResults`).
- Keep style keys aligned with the `TravelStyle` union in `src/quiz/quizTypes.ts`.

## Notes

- `RATIONALE.md` documents project decisions and implementation rationale.
