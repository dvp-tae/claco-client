import { forwardRef } from "react";

const ShowInfoSection = forwardRef<HTMLDivElement>((_, ref) => {
  // const copyAddress = () => {
  //   const url =
  //   navigator.clipboard.writeText(url)
  // };

  const schedule = {
    주중: ["13:30~22:00", "19:30~22:00"],
    주말: ["13:30~22:00", "19:30~22:00"],
  };

  const prices = {
    R석: "100,000원",
    A석: "70,000원",
    B석: "50,000원",
    C석: "30,000원",
  };

  return (
    <section ref={ref}>
      <div className="px-6 pb-[103px]">
        <span className="headline2-bold text-grayscale-80">공연 정보</span>

        <div className="flex-col space-y-5 mt-6">
          <div className="flex space-x-[68px]">
            <span className="headline2-bold text-grayscale-70">기간</span>
            <span className="body1-regular text-grayscale-90">
              2024.10.10~2024.11.09
            </span>
          </div>

          <div className="flex space-x-[39px]">
            <span className="headline2-bold text-grayscale-70">공연장소</span>
            <div>
              <span className="body1-regular text-grayscale-90 mr-2">
                세종문화회관
              </span>
              <button
                // onClick={copyAddress}
                className="caption-12 text-grayscale-70 underline"
              >
                주소 복사하기
              </button>
              <br />
              <span className="body1-regular text-grayscale-80">
                서울 성북구 어쩌구 208-3
              </span>
            </div>
          </div>

          <div className="flex space-x-[39px]">
            <span className="headline2-bold text-grayscale-70">러닝타임</span>
            <span className="body1-regular text-grayscale-90">150분</span>
          </div>

          <div className="flex space-x-[39px]">
            <span className="headline2-bold text-grayscale-70">공연시간</span>
            <div className="flex-col space-y-[22px]">
              {Object.entries(schedule).map(([day, times]) => (
                <div key={day} className="flex space-x-[9px]">
                  <span className="body1-regular text-grayscale-70">{day}</span>
                  <div className="flex flex-col body1-regular text-grayscale-90">
                    {times.map((time, index) => (
                      <span key={index}>{time}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-[68px]">
            <span className="headline2-bold text-grayscale-70">가격</span>
            <div className="flex-col space-y-[9px]">
              {Object.entries(prices).map(([seat, price]) => (
                <div key={seat} className="flex space-x-[16px]">
                  <span className="body1-regular text-grayscale-70">
                    {seat}
                  </span>
                  <span className="body1-regular text-grayscale-90">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ShowInfoSection;
