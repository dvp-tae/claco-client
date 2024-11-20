import { ReactComponent as ClacoTicketContainer } from "@/assets/svgs/Claco_Ticket.svg";
import Image from "@/assets/images/poster6.gif";
import { Genre } from "@/components/common/Genre";

import grand from "@/assets/images/Genre/grand.png";
import delicate from "@/assets/images/Genre/delicate.png";
import classical from "@/assets/images/Genre/classical.png";
import dynamic from "@/assets/images/Genre/dynamic.png";
import familiar from "@/assets/images/Genre/familiar.png";
import { REVIEW_MOCK_DATA_type } from "@/components/Main/Analysis/TicketRecommend";

export type ClacoTicketProps = {
  data: REVIEW_MOCK_DATA_type;
};

export const ClacoTicket = ({ data }: ClacoTicketProps) => {
  const USER_GENRE = [
    { imgUrl: grand, keyWord: "웅장한" },
    { imgUrl: delicate, keyWord: "섬세한" },
    { imgUrl: classical, keyWord: "고전적인" },
    { imgUrl: dynamic, keyWord: "역동적인" },
    { imgUrl: familiar, keyWord: "친숙한" },
  ];

  return (
    <div className="relative w-[213px] h-[471px]">
      <img
        src={Image}
        alt="claco book 포스터 이미지"
        className="absolute top-[7.54px] left-[7px] w-[199px] h-[266px] rounded-[5px]"
      />
      <div className="absolute bottom-[110px]">
        <div className="flex-col w-[213px] text-dark">
          <div className="text-center font-Nonchalance text-[26px]">
            2024.09.28
          </div>
          <div className="text-center font-medium text-[10px]">
            {data.title}
          </div>
          <div className="text-center font-medium text-[10px]">
            LG ART CENTER
          </div>
        </div>
      </div>
      <div className="absolute bottom-[55.18px] px-[13px] w-[213px] flex justify-between">
        {USER_GENRE.map((item, index) => (
          <Genre
            key={index}
            genreImgURL={item.imgUrl}
            genreKeyword={item.keyWord}
            className="w-[29px] h-[29px] text-primary-800 font-medium text-[8px]"
          />
        ))}
      </div>

      <ClacoTicketContainer />
    </div>
  );
};
