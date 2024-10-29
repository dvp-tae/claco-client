export type ReviewTagProps = {
  isPlace?: boolean;
  children: string;
};

export type ReviewSummaryCardProps = {
  username: string;
  rating: number;
  reviewSummaryContent: string;
};

export type ReviewCardType = {
  reviewId: number;
  profileImage: string;
  reviewImageList: string[];
  nickName: string;
  starRating: string;
  reviewContent: string;
  location: string;
  locationReview: string[];
  date: string;
  likeCount: string;
};
