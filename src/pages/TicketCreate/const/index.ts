export const tagMap = {
  웅장한: "grand",
  섬세한: "delicate",
  고전적인: "classical",
  현대적인: "modern",
  서정적인: "lyrical",
  역동적인: "dynamic",
  낭만적인: "romantic",
  비극적인: "tragic",
  친숙한: "familiar",
  새로운: "novel",
} as const;

export const seatTags1 = ["좌석 간격이 넓어요", "좌석 간격이 좁아요"] as const;
export const seatTags2 = ["좌석이 편안해요", "좌석이 불편해요"] as const;

export const soundTags = ["음향이 좋았어요", "음향이 아쉬웠어요"] as const;

export const sightTags = [
  "시야가 탁 트여있어요",
  "시야 확보가 어려워요",
] as const;

export const accessibilityTags = [
  "주차가 편리해요",
  "주차 공간이 부족해요",
] as const;
