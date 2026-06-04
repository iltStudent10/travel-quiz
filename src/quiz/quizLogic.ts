import type { QuizQuestion, ScoreMap, TravelStyle, TravelResult } from "./quizTypes";

export function createInitialScores(): ScoreMap {
    return {
        "road-trip-adventurer": 0,
        "luxury-explorer": 0,
        "budget-backpacker": 0,
        "weekend-city-hopper": 0,
    };
}

export function getTopTravelStyle(scores: ScoreMap): TravelStyle {
    const entries = Object.entries(scores) as [TravelStyle, number][];
    if (entries.length === 0) {
        throw new Error("Unable to determine top travel style from empty scores.");
    }
    return entries.sort((a, b) => b[1] - a[1])[0][0];
}

export function updateScores(scores: ScoreMap, selectedStyle: TravelStyle): ScoreMap {
    return {
        ...scores,
        [selectedStyle]: scores[selectedStyle] + 1,
    };
}

export function isQuizFinished(currentIndex: number, questions: QuizQuestion[]): boolean {
    return currentIndex >= questions.length;
}

export function getResultMessage(result: TravelResult): string {
    return `${result.title}: ${result.description}`;
}