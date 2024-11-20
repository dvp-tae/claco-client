export type ReviewTagProps = {
  isPlace?: boolean;
  children: string;
  onClick?: () => void;
  isSelected?: boolean;
};

export type ReviewSummaryCardProps = {
  username: string;
  rating: number;
  reviewSummaryContent: string;
};

export type Review = {
  ticketReviewId: number;
  userName: string;
  profileImage: string;
  createdDate: string;
  watchSit: string;
  starRate: number;
  content: string;
  reviewImages: Array<{ imageUrl: string }>;
  placeReviews: Array<{
    placeCategoryId: number;
    categoryName: string;
  }>;
  tagReviews: Array<{
    tagCategoryId: number;
    tagName: string;
    iconUrl: string;
  }>;
};

export type ReviewCardProps = {
  review: Review;
  onClick: () => void;
};
