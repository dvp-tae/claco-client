import { ReactComponent as Location_Gray } from "@/assets/svgs/Location_gray.svg";
import { ReactComponent as Calendar } from "@/assets/svgs/Calendar.svg";
import { InfoCardProps } from "@/types/poster";
import { extractDateRange } from "@/hooks/utils";
import { CategoryTag } from "@/components/common/CategoryTag";
import { useNavigate } from "react-router-dom";

export const VerticalInfoCard = ({
  id,
  image,
  title,
  location,
  dateFrom,
  dateTo,
  genrenm,
}: InfoCardProps) => {
  const _date = extractDateRange(dateFrom, dateTo);
  const navigate = useNavigate();
  const gotoShowDetail = () => {
    navigate(`/show/${id}`);
  };

  return (
    <div onClick={gotoShowDetail}>
      <div className="flex-col w-[219px] min-h-[430px] p-[22px] bg-[#242424] rounded-[5px]">
        <img
          className="max-w-[174px] max-h-[232px] object-fill rounded-[5px] mb-[18px]"
          src={image}
        />
        <CategoryTag categoryType={genrenm} />
        <p className="headline2-bold text-grayscale-80 my-[10px] min-h-[48px] line-clamp-2">
          {title}
        </p>
        <div className="body2-medium text-grayscale-70">
          <div className="flex items-center">
            <Location_Gray />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar />
            <span>{_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HorizontalInfoCard = ({
  id,
  image,
  title,
  location,
  dateFrom,
  dateTo,
  genrenm,
}: InfoCardProps) => {
  const _date = extractDateRange(dateFrom, dateTo);

  const navigate = useNavigate();
  const gotoShowDetail = () => {
    navigate(`/show/${id}`);
  };
  return (
    <div
      className="w-[342px] h-[196px] bg-[#242424] rounded-[5px] py-[22px] px-5"
      onClick={gotoShowDetail}
    >
      <div className="flex space-x-5">
        <img
          className="min-w-[105px] max-h-[140px] object-fill rounded-[5px] mb-[18px]"
          src={image}
        />
        <div className="flex-col space-y-[14px]">
          <CategoryTag categoryType={genrenm} />
          <p className="headline2-bold text-grayscale-80 my-[10px] min-h-[48px] line-clamp-2">
            {title}
          </p>
          <div className="body2-medium text-grayscale-70">
            <div className="flex items-center">
              <Location_Gray />
              <span className="truncate max-w-[170px]">{location}</span>
            </div>
            <div className="flex items-center">
              <Calendar />
              {_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
