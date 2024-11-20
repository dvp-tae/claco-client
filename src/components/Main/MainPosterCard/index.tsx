import { ReactComponent as Heart } from "@/assets/svgs/Heart.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import { UserBased } from "@/types";
import { useNavigate } from "react-router-dom";

export type MainPosterCardProps = {
  data: UserBased;
};

export const MainPosterCard = ({ data }: MainPosterCardProps) => {
  const navigate = useNavigate();
  const gotoShowDetail = () => {
    navigate(`/show/${data.id}`);
  };
  return (
    <div
      className="relative w-[342px] h-[482px] rounded-[5px]"
      onClick={gotoShowDetail}
    >
      <div
        className="absolute top-[26px] right-[19px] z-20"
        onClick={() => console.log("좋아요 기능")}
      >
        {data.liked ? (
          <Heart
            className="fill-grayscale-80"
            width="22"
            height="18"
            viewBox="0 0 15 13"
          />
        ) : (
          <Heart
            className="fill-none"
            width="22"
            height="18"
            viewBox="0 0 15 13"
          />
        )}
      </div>
      <div className="rounded-[5px] absolute top-0 left-0 z-10 w-full h-[100px] bg-gradient-to-b from-common-black/40 from-0%  to-[#666666]/0" />
      <img
        src={data.poster}
        alt="poster"
        className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-[5px]"
      />
      <div className="rounded-[5px] absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-common-black/40 from-0% to-common-black to-64% opacity-60"></div>
      <div className="rounded-[5px] absolute bottom-0 left-0 z-10 w-full h-[189px] bg-gradient-to-b from-background-dark/0 to-background-dark/100">
        <div className="flex items-center space-x-[10px] absolute bottom-6 left-[11px]">
          <CategoryTag categoryType={data.genrenm} />
          <div className="heading2-bold text-grayscale-80 truncate max-w-[220px]">
            {data.prfnm}
          </div>
        </div>
      </div>
    </div>
  );
};
