import { TypeButton } from "@/components/Onboarding/Registration";
import { LocationProps } from "@/types";

export const Location = ({
  selectedLocation,
  onLocationClick,
}: LocationProps) => {
  return (
    <div className="grid grid-cols-2 gap-[0.63rem]">
      {["서울", "경기", "인천", "강원", "충청", "전라", "경상", "제주"].map(
        (location) => (
          <TypeButton
            key={location}
            isChecked={selectedLocation.includes(location)}
            onClick={() => onLocationClick(location)}
          >
            {location}
          </TypeButton>
        ),
      )}
    </div>
  );
};
