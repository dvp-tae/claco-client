export type CategoryMap = {
  category: string;
  imageURL: string;
};

export type ConcertInfo = {
  id: number;
  mt20id: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  fcltynm: string;
  poster: string;
  genrenm: string;
  prfstate: string;
  categories: CategoryMap[];
};

export type GetConcertListProps = {
  genre: "서양음악(클래식)" | "무용" | null;
  // direction: string;
  page: number;
  size: number;
};

export type GetConcertListResponse = {
  code: string;
  message: string;
  result: {
    listPageResponse: ConcertInfo[];
    totalCount: number;
    size: number;
  };
  refreshed: boolean;
};

export type AutoCompleteSearchCard = {
  id: number;
  mt20id: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  genrenm: string;
};

export type AutoCompleteSearchResponse = {
  code: string;
  message: string;
  result: AutoCompleteSearchCard[];
  refreshed: boolean;
};

export type ShowSummaryCardProps = {
  data: ConcertInfo;
};

export type SearchCardProps = {
  data: AutoCompleteSearchCard;
  searchKeyWord: string;
  className?: string;
};

export type GetSearchProps = {
  query: string;
  page: number;
  size: number;
};
