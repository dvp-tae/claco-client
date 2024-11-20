export type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  placeholder: string;
};

export type KeywordTagProps = {
  selectedTags: string[];
  onTagClick: (tag: string) => void;
};

export type ReviewQuestionProps = {
  title: string;
  tags: string[];
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
};

export type TextReviewProps = {
  value: string;
  onChange: (text: string) => void;
};

export type ImageReviewProps = {
  files: File[];
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ReviewContentProps = TextReviewProps & ImageReviewProps;

export type SeatQuestionsProps = {
  selectedTag1: string | null;
  selectedTag2: string | null;
  onTagClick1: (tag: string) => void;
  onTagClick2: (tag: string) => void;
};

export type StarRatingProps = {
  rating: number;
  onRatingChange: (newRating: number) => void;
};

export type GenreTag = {
  tagCategoryId: number;
  tagName: string;
  iconUrl: string;
};

export type PlaceReview = {
  placeCategoryId: number;
  categoryName: string;
};

export type ImageUrl = {
  imageUrl: string;
};

export type TicketReview = {
  ticketReviewId: number;
  concertName: string;
  nickname: string;
  watchDate: string;
  createdDate: string;
  watchPlace: string;
  watchRound: string;
  runningTime: string;
  castings: string;
  watchSit: string;
  concertTags: GenreTag[];
  starRate: number;
  content: string;
  placeReviews: PlaceReview[];
  imageUrlS: ImageUrl[];
  editor: boolean;
};
