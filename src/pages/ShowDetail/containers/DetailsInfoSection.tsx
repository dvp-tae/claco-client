import Poster10_detail from "@/assets/images/poster10_detail.jpg";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { forwardRef, useState } from "react";

const DetailsInfoSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [showFullImage, setShowFullImage] = useState(false);

  const toggleFullImageView = () => {
    setShowFullImage(!showFullImage);
  };

  return (
    <section ref={ref}>
      <div className="px-6 pb-[100px]">
        <span className="headline2-bold text-grayscale-80">상세정보</span>
        <div className="flex flex-col items-center space-y-[22px]">
          <div
            className={`mt-6 w-[350px] rounded-t-[5px] ${
              showFullImage ? "max-h-none" : "max-h-[629px] overflow-hidden"
            }`}
          >
            <img
              src={Poster10_detail}
              alt="poster details"
              className="w-full h-auto object-cover rounded-[5px]"
            />
          </div>
          <BackArrow
            width="7"
            height="13"
            viewBox="0 0 11 20"
            className={`cursor-pointer ${showFullImage ? "rotate-90" : "-rotate-90"}`}
            onClick={toggleFullImageView}
          />
        </div>
      </div>
    </section>
  );
});

export default DetailsInfoSection;
