export type TravelStyle =
    | 'road-trip-adventurer'
    | 'luxury-explorer'
    | 'budget-backpacker'
    | 'weekend-city-hopper';

export interface QuizOption {
    text: string;
    style: TravelStyle;
}

export interface QuizQuestion {
    id: number;
    prompt: string;
    options: QuizOption[];
}

export interface TravelResult {
    style: TravelStyle;
    title: string;
    description: string;
}

export type ScoreMap = Record<TravelStyle, number>;