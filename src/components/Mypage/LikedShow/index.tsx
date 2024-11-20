import { SearchBar } from "@/components/common/Search/Bar";
import { ShowFilterTab } from "@/components/common/ShowFilterTab";
import { ShowSummaryCard } from "@/components/common/ShowSummaryCard";
import { useEffect, useState } from "react";
import { useDebouncedState } from "@/hooks/utils";
import { TabMenu } from "@/types";

const TEST_DATA = [
  {
    id: 61,
    mt20id: "string",
    prfnm: "string",
    prfpdfrom: "시작일",
    prfpdto: "종료일",
    fcltynm: "string",
    poster: "string",
    genrenm: "string",
    prfstate: "string",
    categories: [],
  },
  {
    id: 62,
    mt20id: "string",
    prfnm: "string",
    prfpdfrom: "시작일",
    prfpdto: "종료일",
    fcltynm: "string",
    poster: "string",
    genrenm: "string",
    prfstate: "string",
    categories: [],
  },
];

export const LikedShow = () => {
  const [activeTab, setActiveTab] = useState<TabMenu>(null);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebouncedState(query, 1000);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
  };

  const handleTabClick = (tab: TabMenu) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log(debouncedQuery);
    // 좋아요 한 공연 검색 api 함수
  }, [debouncedQuery]);

  return (
    <div className="flex-col pb-10">
      <ShowFilterTab
        activeTab={activeTab}
        onTabClick={handleTabClick}
        className="mb-[19px]"
      />
      <div className="relative w-full mb-[22px]">
        <SearchBar
          value={query}
          onChange={handleSearchChange}
          placeholder={"공연 이름을 검색해주세요"}
        />
      </div>
      <div className="flex flex-col gap-[29px]">
        {TEST_DATA.map((show) => (
          <ShowSummaryCard key={show.id} data={show} />
        ))}
      </div>
    </div>
  );
};
