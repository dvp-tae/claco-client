import { useRef, useState, useEffect } from "react";
import ShowInfoSection from "./containers/ShowInfoSection";
import ReservationRatioSection from "./containers/ReservationRatioSection";
import DetailsInfoSection from "./containers/DetailsInfoSection";
import ReviewSection from "./containers/ReviewSection";
import TopShowInfoSection from "./containers/TopShowInfoSection";
import RelatedShowsSection from "./containers/RelatedShowsSection";

export const ShowDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("공연 정보");
  const [isSticky, setIsSticky] = useState(true);
  const [showFullImage, setShowFullImage] = useState(false);

  const tabs = ["공연 정보", "예매자 비율", "상세정보", "감상 리뷰"];

  const showInfoRef = useRef<HTMLDivElement>(null);
  const reservationRatioRef = useRef<HTMLDivElement>(null);
  const detailsInfoRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const relatedShowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionRefs = {
      "공연 정보": showInfoRef,
      "예매자 비율": reservationRatioRef,
      상세정보: detailsInfoRef,
      "감상 리뷰": reviewRef,
    };

    Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSelectedTab(sectionId);
            }
          });
        },
        {
          threshold: sectionId === "상세정보" && showFullImage ? 0.2 : 0.8,
        },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });

    const currentRelatedShowsRef = relatedShowsRef.current;
    const endObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(false);
          } else {
            setIsSticky(true);
          }
        });
      },
      { threshold: 0.8 },
    );

    if (currentRelatedShowsRef) {
      endObserver.observe(currentRelatedShowsRef);
    }

    return () => {
      if (currentRelatedShowsRef) {
        endObserver.unobserve(currentRelatedShowsRef);
      }
    };
  }, [showFullImage]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const yOffset = -100;
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    if (tab === "공연 정보") {
      scrollToSection(showInfoRef);
    } else if (tab === "예매자 비율") {
      scrollToSection(reservationRatioRef);
    } else if (tab === "상세정보") {
      scrollToSection(detailsInfoRef);
    } else if (tab === "감상 리뷰") {
      scrollToSection(reviewRef);
    }
  };

  return (
    <div className="pt-[73px]">
      <TopShowInfoSection />

      <div
        className={`bg-dark w-full pt-8 ${!isSticky ? "" : "sticky top-0 z-50"}`}
      >
        <div className="flex flex-col items-center justify-center px-[24px] mb-[49px]">
          <div className="relative flex justify-between w-full mb-[14px] px-[15px]">
            {tabs.map((tab) => (
              <span
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`text-center cursor-pointer pb-2 ${
                  selectedTab === tab
                    ? "body2-semibold text-grayscale-80 border-b-2 border-grayscale-80 z-10"
                    : "body2-medium text-grayscale-60 border-b-2 border-grayscale-30"
                }`}
              >
                {tab}
              </span>
            ))}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-grayscale-30" />
          </div>
        </div>
      </div>

      <div ref={showInfoRef} data-section-id="공연 정보">
        <ShowInfoSection />
      </div>
      <div ref={reservationRatioRef} data-section-id="예매자 비율">
        <ReservationRatioSection />
      </div>
      <div ref={detailsInfoRef} data-section-id="상세정보">
        <DetailsInfoSection
          showFullImage={showFullImage}
          setShowFullImage={setShowFullImage}
        />
      </div>
      <div ref={reviewRef} data-section-id="감상 리뷰">
        <ReviewSection />
      </div>

      <div ref={relatedShowsRef}>
        <RelatedShowsSection />
      </div>
    </div>
  );
};
