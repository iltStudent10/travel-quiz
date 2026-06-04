# Rationale

I built this project as an interactive quiz called "What's Your Travel Style?" to create a fun user experience while demonstrating JavaScript fundamentals and TypeScript features. TypeScript helped improve code quality by defining clear types for quiz questions. answers options, scores, and results. Using interfaces, union types, and typed function parameters made it easier to catch mistakes early and keep the quiz logic predictable.

I organized the app into separate modules so each file has a clear responsibility. The quiz data, types, and scoring logic are separated from the React component in `App.tsx`, which makes the code easier to understand and maintain. I used imports and exports to connect those pieces without placing everything in one file.

Vite supported my workflow by providing a fast development server and a simple build process. The quick refresh cycle made it easy to test changes to the quiz UI and logic, and the production build confirmed that the app could compile successfully.

Some of the most useful JavaScript patterns in this project were object literals for tracking scores, array methods for selecting the highest score, destructuring for cleaner code, and template-friendly rendering through JSX. Event handling was also essential because the quiz depends on user interaction to move through question and display the final result.