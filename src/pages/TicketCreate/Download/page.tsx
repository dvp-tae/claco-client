import { Progress } from "@/components/ui/progress";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Download } from "@/assets/svgs/download.svg";
import { useNavigate } from "react-router-dom";
import { ClacoTicket } from "@/components/common/ClacoTicket";
import { REVIEW_MOCK_DATA_type } from "@/components/Main/Analysis/TicketRecommend";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Toast } from "@/libraries/toast/Toast";
import { DownLoadModal } from "@/components/Ticket/Modal/DownLoad";

const REVIEW_MOCK_DATA: REVIEW_MOCK_DATA_type = {
  title: "히사이시조",
  username: "밍밍보따리",
  review:
    "전문 무용수들의 실력이 눈부시게 빛났습니다. 지젤 역을 맡은 발레리나의 날렵한 동작과 뛰어난 연기는 보는 이의 마음을 울렸습니다. 특히, 2막의 윌리들의 군무는 환상적이었고, 유령들의 통일성이 돋보였습니다. 모든 출연진이 하나가 되어 춤출 때, 진한 감동이 전해졌습니다.",
};

export const TicketDownloadPage = () => {
  const navigate = useNavigate();
  const ticketRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);

  const convertToImageAndUpload = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        backgroundColor: "#1C1C1C",
        useCORS: true,
        allowTaint: true,
        logging: true,
      });

      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => resolve(blob!), "image/png", 1.0);
      });

      const formData = new FormData();
      formData.append("ticket", blob, "ticket.png");

      for (const i of formData.entries()) {
        console.log(i);
      }
    } catch (error) {
      console.error("티켓 이미지 변환/업로드 실패:", error);
    }
  };

  useEffect(() => {
    convertToImageAndUpload();
  }, []);

  const handleBackClick = () => {
    navigate("/show/1/reviews/1");
  };

  const handleConfirmClick = () => {
    navigate("/ticketbook/1");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onDownloadBtn = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current!, {
        scale: 2,
        backgroundColor: "#1C1C1C",
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "MyClacoTicket.png");
          setToast(true);
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
    handleCloseModal();
  };

  return (
    <div className="flex flex-col pt-[46px] pb-[67px]">
      <div className="px-[24px]">
        <div className="flex items-center justify-between mb-[33px]">
          <BackArrow
            width="9"
            height="18"
            viewBox="0 0 11 20"
            onClick={handleBackClick}
            className="mr-4"
          />
          <span className="headline2-bold text-grayscale-80">티켓 저장</span>
          <span
            className="body1-medium text-grayscale-80"
            onClick={handleConfirmClick}
          >
            완료
          </span>
        </div>
        <Progress value={100} />
      </div>

      <div className="mt-[40px]">
        <div className="px-[24px] headline2-bold text-white">
          관람 후기가 등록됐어요! <br /> 나만의 클라코 티켓을 간직해보세요
        </div>
        <div className="mb-[24px] flex items-center justify-center mt-[31px] relative overflow-hidden">
          <div ref={ticketRef} className="z-10">
            <ClacoTicket data={REVIEW_MOCK_DATA} />
          </div>
          <div className="absolute bottom-0 w-screen h-[269px] bg-gradient-to-t from-[#DB5F35]/30 to-[#F7B29D]/0" />
        </div>
        <div className="flex items-center justify-center border border-grayscale-80 rounded-[5px] mx-[24px] px-[120px] py-4 gap-[10px] cursor-pointer">
          <Download />
          <span
            className="caption-12 text-grayscale-80"
            onClick={handleModalOpen}
          >
            이미지 다운로드
          </span>
          {isModalOpen && (
            <DownLoadModal
              onClose={handleCloseModal}
              onConfirm={onDownloadBtn}
            />
          )}

          {toast && (
            <Toast setToast={setToast} message={"티켓 다운이 완료되었어요"} />
          )}
        </div>
      </div>
    </div>
  );
};
