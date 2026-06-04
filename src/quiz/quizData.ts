import type { QuizQuestion, TravelResult, TravelStyle } from "./quizTypes";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "How do you like to travel?",
    options: [
        { text: "Spontaneous and scenic", style: "road-trip-adventurer" },
        { text: "Comfortable and polished", style: "luxury-explorer" },
        { text: "Cheap and flexible", style: "budget-backpacker" },
        { text: "Short, efficient, and packed", style: "weekend-city-hopper" },
    ],
  },
  {
    id: 2,
    prompt: "What's your ideal sound track?",
    options: [
        { text: "Indie folk and acoustic", style: "road-trip-adventurer" },
        { text: "Relaxing lounge music", style: "luxury-explorer" },
        { text: "Whatever is on the radio", style: "budget-backpacker" },
        { text: "Upbeat pop for exploring", style: "weekend-city-hopper" },
    ],
  },
  {
    id: 3,
    prompt: "Pick your favorite travel companion:",
    options: [
        { text: "My pet", style: "road-trip-adventurer" },
        { text: "Anyone with good taste in hotels", style: "luxury-explorer" },
        { text: "Myself", style: "budget-backpacker" },
        { text: "Group of friends", style: "weekend-city-hopper" },
    ],
  },
  {
    id: 4,
    prompt: "Choose an activity:",
    options: [
        { text: "Roadside stops and scenic drives", style: "road-trip-adventurer" },
        { text: "Fancy dinner and spa time", style: "luxury-explorer" },
        { text: "Mountains and hiking", style: "budget-backpacker" },
        { text: "Museums, coffee shops, and nightlife", style: "weekend-city-hopper" },
    ],
  },
  {
    id: 5,
    prompt: "What matters most?",
    options: [
        { text: "The journey", style: "road-trip-adventurer" },
        { text: "Comfort", style: "luxury-explorer" },
        { text: "Being flexible", style: "budget-backpacker" },
        { text: "Having a jam-packed schedule", style: "weekend-city-hopper" },
    ],
  }
];

export const travelResults: Record<string,TravelResult> = {
  "road-trip-adventurer":
    {
      style: "road-trip-adventurer",
      title: "Road Trip Adventurer",
      description: "You love the open road and the freedom to explore at your own pace, making the journey part of the fun.",
    },
  "luxury-explorer":
    {
      style: "luxury-explorer",
      title: "Luxury Explorer",
      description: "You enjoy comfortable plans, great food, and travel with a little extra polish.",
    },
  "budget-backpacker":
    {
      style: "budget-backpacker",
      title: "Budget Backpacker",
      description: "You practical, flexible, and adventurous, seeking new experiences without breaking the bank.",
    },
  "weekend-city-hopper":
    {
      style: "weekend-city-hopper",
      title: "Weekend City Hopper",
      description: "You like fast-paced adventures, city energy, and packing as much as possible into your getaway.",
    },
};

export const travelStyleLabels: Record<TravelStyle, string> = {
  "road-trip-adventurer": "Road Trip Adventurer",
  "luxury-explorer": "Luxury Explorer",
  "budget-backpacker": "Budget Backpacker",
  "weekend-city-hopper": "Weekend City Hopper",
};