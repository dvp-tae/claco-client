import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as DownLoad } from "@/assets/svgs/DownLoadBox.svg";
import { ReactComponent as DotsThree } from "@/assets/svgs/dotsthree.svg";
import { ReactComponent as Plus } from "@/assets/svgs/plus.svg";
import ClacoTicketImage1 from "@/assets/images/MyClacoTicket1.png";
import ClacoTicketImage2 from "@/assets/images/MyClacoTicket2.png";
import ClacoTicketImage3 from "@/assets/images/MyClacoTicket3.png";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { createRef, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toast } from "@/libraries/toast/Toast";
import { MoveModal } from "@/components/Ticket/Modal/Move";
import { DeleteClacoTicketModal } from "@/components/Ticket/Modal/Delete/ClacoTicket";
import { DownLoadModal } from "@/components/Ticket/Modal/DownLoad";

const CLACO_IMAGE = [
  {
    id: 1,
    ticketImage: ClacoTicketImage1,
  },
  {
    id: 2,
    ticketImage: ClacoTicketImage2,
  },
  {
    id: 3,
    ticketImage: ClacoTicketImage3,
  },
];
const CLACOBOOK_LIST = ["내가 좋아하는 무용", "밍밍보따리", "시요밍"];

export const ClacoBookDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("title");

  const ticketRefs = useRef(CLACO_IMAGE.map(() => createRef<HTMLDivElement>()));
  const [currentClacoBook, setCurrentClacoBook] = useState<string>("");
  const [selectTicketIndex, setSelectTicketIndex] = useState<number>(1);
  const [selectClacoBook, setSelectClacoBook] = useState<string>(
    CLACOBOOK_LIST[0]
  );
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const [actionState, setActionState] = useState<
    "move" | "delete" | "download"
  >();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);

  useEffect(() => {
    setCurrentClacoBook(value as string);
  }, [value]);

  const gotoBack = () => {
    navigate(-1);
  };

  const gotoTicketDetail = (tId: number) => {
    navigate(`/ticket/${tId}`);
  };

  const gotoTicketCreate = () => {
    navigate("/ticketcreate/search");
  };

  const onDownloadBtn = async () => {
    const activeRef = ticketRefs.current[selectTicketIndex];
    if (!ticketRefs.current) return;

    try {
      const canvas = await html2canvas(activeRef.current!, {
        scale: 2,
        backgroundColor: "#1C1C1C",
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "MyClacoTicket.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  const handleModalOpen = (action: "move" | "delete" | "download") => {
    setActionState(action);
    setIsSetting(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async () => {
    if (actionState === "move") {
      console.log(selectClacoBook);
    } else if (actionState === "delete") {
      console.log(selectTicketIndex);
    } else {
      onDownloadBtn();
    }
    setIsModalOpen(false);
    setToast(true);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setSelectTicketIndex(swiper.activeIndex);
  };

  return (
    <div className="relative flex flex-col pt-[46px] items-center justify-center px-6">
      <div className="flex justify-between items-center w-full mb-[56px] h-[26px]">
        <div className="w-[56px]">
          <BackArrow onClick={gotoBack} />
        </div>
        <span className="headline2-bold text-grayscale-80">
          {currentClacoBook}
        </span>
        <div className="flex space-x-[21px] w-[56px]">
          <DownLoad onClick={() => handleModalOpen("download")} />
          <DotsThree onClick={() => setIsSetting(true)} />
        </div>
      </div>

      {/* 티켓 이동, 삭제 드롭박스 */}
      {isSetting ? (
        <>
          <div
            className="absolute top-0 w-screen h-screen bg-[#111111] opacity-80 z-10"
            onClick={() => setIsSetting(false)}
          />
          <div className="absolute top-[85px] right-[23px] bg-grayscale-20 px-[19px] py-[14px] rounded-[5px] z-20">
            <ul className="flex flex-col space-y-[14px] body2-medium text-grayscale-80">
              <li onClick={() => handleModalOpen("move")}>티켓 이동하기</li>
              <li onClick={() => handleModalOpen("delete")}>티켓 삭제하기</li>
            </ul>
          </div>
        </>
      ) : null}

      {/* 모달 컴포넌트 영역 */}
      {isModalOpen && (
        <>
          {actionState === "move" ? (
            <MoveModal
              clacoBookList={CLACOBOOK_LIST}
              onClose={handleCloseModal}
              onConfirm={handleConfirm}
              onSelect={setSelectClacoBook}
            />
          ) : actionState === "delete" ? (
            <DeleteClacoTicketModal
              onClose={handleCloseModal}
              onConfirm={handleConfirm}
            />
          ) : (
            <DownLoadModal
              onClose={handleCloseModal}
              onConfirm={handleConfirm}
            />
          )}
        </>
      )}

      {/* 토스트 영역 */}
      {toast && (
        <Toast
          setToast={setToast}
          message={
            actionState === "move"
              ? "티켓이 이동이 완료되었어요"
              : actionState === "delete"
                ? "티켓이 삭제되었어요"
                : "티켓 다운이 완료되었어요"
          }
        />
      )}

      <div className="clacobook pb-[185px]">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={213}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            setSelectTicketIndex(swiper.activeIndex);
          }}
          className="max-w-[240px] h-[569px] rounded-[5px] flex justify-center items-center"
        >
          {CLACO_IMAGE.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div
                className="w-[240px] h-[530px]"
                ref={ticketRefs.current[index]}
                onClick={() => gotoTicketDetail(image.id)}
              >
                <img
                  src={image.ticketImage}
                  alt="클라코 티켓 이미지"
                  className="w-[240px] h-[530px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="absolute bottom-[57px] right-[26px] w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center"
        onClick={gotoTicketCreate}
      >
        <Plus viewBox="0 0 22 22" width={40} height={40} />
      </div>
    </div>
  );
};
