import { Progress } from "@/components/ui/progress";
import { ReactComponent as Download } from "@/assets/svgs/download.svg";
import { useNavigate } from "react-router-dom";
import { ClacoTicket } from "@/components/common/ClacoTicket";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Toast } from "@/libraries/toast/Toast";
import { DownLoadModal } from "@/components/Ticket/Modal/DownLoad";
import { usePutTicketImage } from "@/hooks/mutation";
import useGetTicketReviewDetail from "@/hooks/queries/useGetTicketReviewDetail";
import usePostShowPoster from "@/hooks/mutation/usePostShowPoster";

export const TicketDownloadPage = () => {
  const navigate = useNavigate();
  const ticketRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);
  const [posterImage, setPosterImage] = useState<string>("");

  const { mutate: uploadTicketImage, data: ticketData } = usePutTicketImage();
  const { mutate: uploadPosterImage, data: posterData } = usePostShowPoster();
  const ticketReviewId = Number(localStorage.getItem("ticketReviewId"));
  const { data, isLoading } = useGetTicketReviewDetail(ticketReviewId);
  const ticketReviewDetail = data?.result;
  const [isChecked, setIsChecked] = useState<boolean>(false);

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

      if (!blob) {
        throw new Error("이미지 Blob 생성에 실패했습니다.");
      }

      uploadTicketImage({
        id: ticketReviewId,
        file: new File([blob], "ticket.png", { type: "image/png" }),
      });

      setIsChecked(true);
    } catch (error) {
      console.error("티켓 이미지 변환/업로드 실패:", error);
    }
  };

  useEffect(() => {
    const posterUrl = localStorage.getItem("poster") || "";
    const formattedUrl = posterUrl.replace(/^"|"$/g, "");

    if (formattedUrl) {
      uploadPosterImage({ image_url: formattedUrl });
    }
  }, [uploadPosterImage]);

  useEffect(() => {
    if (posterData?.s3_url) {
      setPosterImage(posterData.s3_url);
    }
  }, [posterData]);

  useEffect(() => {
    if (!isLoading && ticketReviewDetail) {
      const timer = setTimeout(() => {
        convertToImageAndUpload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, ticketReviewDetail]);

  const handleConfirmClick = () => {
    navigate(`/ticketbook`);
    localStorage.removeItem("clacoBookId");
    localStorage.removeItem("poster");
    localStorage.removeItem("showId");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const DataUrl = (url: string) => {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  };
  const onDownloadBtn = async () => {
    const a = document.createElement("a");
    a.href = await DataUrl(ticketData?.result.imageUrl || "");
    a.download = "MyClacoTicket.png";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setToast(true);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col pt-[46px] pb-[67px]">
      <div className="px-[24px]">
        <div className="relative text-center items-center mb-[33px]">
          <span className="headline2-bold text-grayscale-80">티켓 저장</span>
          <span
            className="absolute top-0 right-0 body1-medium text-grayscale-80"
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
            {isChecked ? (
              <img
                src={ticketData?.result.imageUrl}
                alt="ticket.png"
                className="w-[213px] h-[471px] z-10"
                crossOrigin="anonymous"
              />
            ) : (
              <ClacoTicket
                concertPoster={posterImage}
                watchDate={ticketReviewDetail?.watchDate || ""}
                concertName={ticketReviewDetail?.concertName || ""}
                concertTags={ticketReviewDetail?.concertTags || []}
              />
            )}
          </div>
          <div className="absolute bottom-0 w-screen h-[269px] bg-gradient-to-t from-[#DB5F35]/30 to-[#F7B29D]/0" />
        </div>
        <div
          className="flex items-center justify-center border border-grayscale-80 rounded-[5px] mx-[24px] px-[120px] py-4 gap-[10px] cursor-pointer"
          onClick={handleModalOpen}
        >
          <Download />
          <span className="caption-12 text-grayscale-80">이미지 다운로드</span>
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
