import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";
import { SearchBar } from "@/components/common/Search/Bar";
import { SearchCard } from "@/components/common/Search/Card";
import { Progress } from "@/components/ui/progress";
import { useDebouncedState } from "@/hooks/utils";
import { AutoCompleteSearchCard } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TicketSearchPage = () => {
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebouncedState(query, 1000);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/ticketbook");
  };

  const handleConfirmClick = () => {
    navigate("/ticketcreate/info");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  //자동 완성 검색 결과 테스트 데이터
  const shows: AutoCompleteSearchCard[] = [
    {
      id: 27,
      mt20id: "aaa",
      prfnm: "제목",
      prfpdfrom: "시작일",
      prfpdto: "종료일",
      genrenm: "서양음악(클래식)",
    },
    {
      id: 28,
      mt20id: "aaa",
      prfnm: "제목",
      prfpdfrom: "시작일",
      prfpdto: "종료일",
      genrenm: "서양음악(클래식)",
    },
    {
      id: 29,
      mt20id: "aaa",
      prfnm: "제목",
      prfpdfrom: "시작일",
      prfpdto: "종료일",
      genrenm: "서양음악(클래식)",
    },
  ];

  return (
    <div className="relative flex flex-col h-screen px-[24px] pt-[46px] pb-[60px]">
      <div className="flex flex-col gap-[33px]">
        <div className="relative flex items-center justify-center">
          <BackArrow
            width="9"
            height="18"
            viewBox="0 0 11 20"
            className="absolute left-0"
            onClick={handleBackClick}
          />
          <span className="headline2-bold text-grayscale-80">티켓 등록</span>
        </div>
        <Progress value={30} />
        <SearchBar
          value={query}
          onChange={handleSearchChange}
          placeholder={"관람한 공연을 검색해주세요"}
        />
      </div>

      <div className="flex-grow overflow-y-auto mt-[20px]">
        <div
          className={`flex flex-col gap-[11px] ${query === "" ? "hidden" : ""}`}
        >
          {shows.map((show) => (
            <div onClick={() => setSelectedShow(show.id)} key={show.id}>
              <SearchCard data={show} searchKeyWord={debouncedQuery} />
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 h-[102px] w-full bg-gradient-to-b from-transparent to-[#1C1C1C] pointer-events-none" />
      </div>

      <ConfirmButton
        isChecked={selectedShow !== null}
        onClick={handleConfirmClick}
        disabled={selectedShow === null}
      >
        다음
      </ConfirmButton>
    </div>
  );
};
