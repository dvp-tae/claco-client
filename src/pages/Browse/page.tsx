import { SearchBar } from "@/components/common/Search/Bar";
import { ShowFilterTab } from "@/components/common/ShowFilterTab";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Filter } from "@/assets/svgs/filter.svg";
import { ReactComponent as Refresh } from "@/assets/svgs/refresh.svg";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";

import { SearchCard } from "@/components/common/Search/Card";
import { ShowFilter } from "@/components/Browse/ShowFilter";
import { ShowSummaryCard } from "@/components/common/ShowSummaryCard";

//최근 공연 데이터 목록 (둘러보기 페이지 접근 시 초기에 보여지는 정보)
import { searchResultData } from "@/components/common/ShowSummaryCard/const";

import poster13 from "@/assets/images/poster13.png";
import poster4 from "@/assets/images/poster4.gif";
import poster8 from "@/assets/images/poster8.gif";
import { ClacoPick } from "@/components/Browse/ClacoPick";
import { useDebouncedState, useShowFilter } from "@/hooks/utils";
import { useGetConcertList } from "@/hooks/queries";
import { AutoCompleteSearchCard, ConcertInfo, TabMenu } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import useGetAutoCompleteSearch from "@/hooks/queries/useGetAutoCompleteSearch";
// import useGetSearch from "@/hooks/queries/useGetSearch";

export const BrowsePage = () => {
  const [query, setQuery] = useState<string>("");
  const [skipDebounce, setSkipDebounce] = useState<boolean>(false);
  const debouncedQuery = useDebouncedState(query, 1000, skipDebounce);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabMenu>(null);
  const [recentConcerList, setRecentConcerList] = useState<ConcertInfo[]>([]);
  const [autoCompleteList, setAutoCompleteList] = useState<
    AutoCompleteSearchCard[]
  >([]);
  const [totalCount, setTotalCount] = useState<number>();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const {
    filterState,
    showFilter,
    hasActiveFilters,
    handleFilterClick,
    handleRefreshClick,
    applyFilter,
    closeFilter,
  } = useShowFilter();

  const { data: concertData, isLoading: concertDataLoading } =
    useGetConcertList({
      genre: activeTab,

      page: 1,
      size: 9,
    });

  const { data: autoCompleteData, isLoading: autoCompleteDataLoading } =
    useGetAutoCompleteSearch(debouncedQuery);

  // const { data: searchData, isLoading: searchDataLoading } = useGetSearch({
  //   query: debouncedQuery,
  //   page: 1,
  //   size: 9,
  // });

  useEffect(() => {
    if (concertData && !concertDataLoading) {
      // console.log(data);
      setTotalCount(concertData.result.totalCount);
      setRecentConcerList(concertData.result.listPageResponse);
    }
  }, [concertDataLoading, concertData]);

  useEffect(() => {
    if (autoCompleteData && !autoCompleteDataLoading) {
      console.log(autoCompleteData);
      setAutoCompleteList(autoCompleteData.result);
    }
  }, [
    debouncedQuery,
    autoCompleteDataLoading,
    setAutoCompleteList,
    autoCompleteData,
  ]);

  const handleTabClick = (tab: TabMenu) => {
    // console.log(tab);
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSkipDebounce(newValue === "");
    setQuery(newValue);
    if (newValue.trim().length === 0) setAutoCompleteList([]);
  };

  const isProcessing = useRef(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isProcessing.current) {
      e.preventDefault();
      e.stopPropagation();
      isProcessing.current = true;
      console.log(query);
      console.log("api 호출 함수 부분입니다.");
      setIsSearch(false);
      setSkipDebounce(true);
      setTimeout(() => {
        isProcessing.current = false;
        searchInputRef.current?.blur();
      }, 300);
    }
  };

  useEffect(() => {
    if (skipDebounce) {
      const timer = setTimeout(() => {
        setSkipDebounce(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [skipDebounce]);

  if (concertDataLoading) {
    return (
      <div className="w-full px-6 pt-[41px] flex flex-col justify-center items-center gap-6">
        <Skeleton className="w-[86px] h-[36px] rounded-[3px]" />
        <Skeleton className="w-full h-[52px] rounded-[3px]" />
        <Skeleton className="w-full h-[36px] rounded-[3px]" />
        <div className="w-full flex flex-col justify-center items-start gap-[6px]">
          <Skeleton className="w-[68px] h-[36px] rounded-[3px]" />
          <Skeleton className="w-[51px] h-[24px] rounded-[3px]" />
        </div>
        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            className="h-[179px] w-full flex-shrink-0 rounded-[3px]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="px-6 pb-[110px] min-h-screen relative">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[46px] mb-[30px] flex items-center relative w-full justify-center">
          {isSearch ? (
            <BackArrow
              className="absolute left-0"
              onClick={() => setIsSearch(false)}
            />
          ) : null}

          <span className="headline2-bold text-grayscale-80">둘러보기</span>
        </div>
        <div className="relative w-full">
          <SearchBar
            ref={searchInputRef}
            value={query}
            onFocus={() => setIsSearch(true)}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder={"공연명, 출연자, 극단 등을 검색하세요."}
          />

          {/* 검색어 자동 완성 영역 */}
          {isSearch ? (
            <div className="flex flex-col space-y-[11px] mt-[11px]">
              {/* 검색 키워드로 받아오는 데이터로 교체해야함 */}
              {debouncedQuery.trim().length !== 0 ? (
                <>
                  {autoCompleteList?.map((show) => (
                    <SearchCard
                      key={show.id}
                      data={show}
                      searchKeyWord={query}
                    />
                  ))}
                </>
              ) : null}
            </div>
          ) : (
            <>
              {/* 전체, 클래식, 무용 탭  -> 이름 변경 필요할듯 */}
              {debouncedQuery.trim().length === 0 ? (
                <ShowFilterTab
                  activeTab={activeTab}
                  onTabClick={handleTabClick}
                  className="mt-6 mb-[14px]"
                />
              ) : null}

              {showFilter && (
                <ShowFilter onClose={closeFilter} onApply={applyFilter} />
              )}

              <div className="flex items-center justify-between gap-3 py-1">
                {hasActiveFilters ? (
                  <div className="flex text-center gap-[5px] pl-1 overflow-x-auto scrollbar-hide">
                    {filterState.priceRange && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.priceRange}
                      </div>
                    )}
                    {filterState.selectedLocation && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.selectedLocation}
                      </div>
                    )}
                    {filterState.dateRange && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.dateRange}
                      </div>
                    )}
                    {filterState.selectedFeature && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.selectedFeature}
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="headline1-bold text-grayscale-80">
                    {debouncedQuery.trim().length === 0 ? "최근 공연" : null}
                  </span>
                )}
                {debouncedQuery.trim().length === 0 ? (
                  <div className="flex gap-2">
                    <Filter onClick={handleFilterClick} />
                    <Refresh onClick={handleRefreshClick} />
                  </div>
                ) : null}
              </div>
              <div className="mt-4">
                {hasActiveFilters && (
                  <span className="headline1-bold text-grayscale-80">
                    {debouncedQuery.trim().length === 0 ? "최근 공연" : null}
                  </span>
                )}
              </div>
              {debouncedQuery.trim().length === 0 ? (
                // 최근 공연 둘러보기 영역(검색 전)
                <>
                  <span className="caption-12 text-grayscale-60">
                    총 {totalCount}개
                  </span>
                  <div className="flex flex-col gap-[29px] mt-[12px]">
                    {recentConcerList &&
                      recentConcerList.map((show) => (
                        <ShowSummaryCard key={show.id} data={show} />
                      ))}
                  </div>
                </>
              ) : (
                // 검색 이후 로직
                <>
                  <div className="flex flex-col gap-[29px] mt-[12px]">
                    {searchResultData.length === 0 ? (
                      <div className="flex flex-col items-center mt-[121px]">
                        <div className="flex flex-col gap-1 mb-[112px]">
                          <span className="headline1-bold text-grayscale-90">
                            찾으시는 공연 정보가 없어요
                          </span>
                          <span className="caption-13 text-grayscale-50">
                            입력하신 단어가 정확한지 확인해주세요
                          </span>
                        </div>

                        <div className="w-full max-w-screen-sm">
                          <ClacoPick
                            userName="달보라"
                            picks={[
                              {
                                imageSrc: poster8,
                                title: "랑랑 피아노 리사이틀",
                              },
                              { imageSrc: poster13, title: "빈 필하모닉" },
                              { imageSrc: poster4, title: "피아노 리사이틀" },
                            ]}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* <span className="headline1-bold">총 3개의 공연</span>
                        {searchResultData.map((show) => (
                          <ShowSummaryCard key={show.id} {...show} />
                        ))} */}
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
