export type SettingsProps = {
  onBack: () => void;
  onClick: () => void;
};

export type PreferenceAnalysisProps = {
  onSettingsOpen: () => void;
};

export type PreferRegion = {
  preferenceRegion: string;
};

export type PreferCategory = {
  preferenceCategory: string;
};

export type PreferType = {
  preferenceType: string;
};

export type UserPreferenceResult = {
  gender: "MALE" | "FEMALE";
  age: number;
  minPrice: number;
  maxPrice: number;
  preferRegions: PreferRegion[];
  preferCategories: PreferCategory[];
  preferTypes: PreferType[];
};

export type UserPreferencesResponse = {
  code: string;
  message: string;
  result: UserPreferenceResult;
};

export type UserBased = {
  id: number;
  prfnm: string;
  poster: string;
  genrenm: string;
  liked: boolean;
};

export type UserBasedResponse = {
  code: string;
  message: string;
  result: UserBased[];
  refreshed: boolean;
};

export type ConcertCard = {
  id: number;
  prfnm: string;
  poster: string;
  genrenm: string;
  fcltynm: string;
  prfpdfrom: string;
  prfpdto: string;
};

export type UserItemBased = {
  keywords: string[];
  likedHistory: boolean;
  recommendationConcertsResponseV1s: ConcertCard[];
};

export type UserItemBasedResponse = {
  code: string;
  message: string;
  result: UserItemBased;
  refreshed: boolean;
};

export type UserRecClacoTicket = {
  ticketInfoResponse: {
    id: number;
    ticketImage: string;
  };
  ticketReviewSummary: {
    "사용자 닉네임": string;
    "공연 제목": string;
    "공연 아이디": number;
    "티켓 등록 날짜(관람 날짜)": string;
    "리뷰 내용": string;
  };
};

export type UserRecClacoTicketResponse = {
  code: string;
  message: string;
  result: UserRecClacoTicket[];
  refreshed: boolean;
};
