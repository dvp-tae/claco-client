import { ReviewTag } from "@/components/common/ReviewTag";
import { tagMap } from "@/pages/TicketCreate/const";
import { KeywordTagProps } from "@/types";

export const KeywordTags = ({ selectedTags, onTagClick }: KeywordTagProps) => {
  // tags 타입 지정
  const tags: Array<keyof typeof tagMap> = Object.keys(tagMap) as Array<
    keyof typeof tagMap
  >;

  const handleClick = (tag: keyof typeof tagMap) => {
    const englishTag = tagMap[tag];
    if (selectedTags.includes(englishTag)) {
      onTagClick(englishTag);
    } else if (selectedTags.length < 5) {
      onTagClick(englishTag);
    }
  };

  return (
    <div className="flex flex-col mt-8">
      <span className="body2-semibold text-grayscale-60">
        공연 성격에 해당되는 키워드를 5개 선택해주세요
      </span>
      <div className="flex flex-col mt-5 gap-[14px]">
        {[0, 4, 8].map((startIndex) => (
          <div className="flex gap-2" key={startIndex}>
            {tags.slice(startIndex, startIndex + 4).map((tag) => (
              <ReviewTag
                key={tag}
                onClick={() => handleClick(tag)}
                isSelected={selectedTags.includes(tagMap[tag])}
                isPlace={true}
              >
                {tag}
              </ReviewTag>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
