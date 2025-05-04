// src/utils/moodHelpers.js

export const getMoodColor = (mood) => {
  switch (mood) {
    case "Happy":
      return "bg-green-600 ";
    case "Sad":
      return "bg-red-500";
    case "Excited":
      return "bg-yellow-600";
    default:
      return "text-gray-500";
  }
};

export const getMoodIcon = (mood) => {
  switch (mood) {
    case "Happy":
      return "😄";
    case "Sad":
      return "😢";
    case "Excited":
      return "🤩";
    default:
      return "❓";
  }
};
