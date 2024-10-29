import Profile from "@/assets/images/profile.png";
import Review from "@/assets/images/review.png";
import Review1 from "@/assets/images/poster1.gif";
import Review2 from "@/assets/images/poster2.gif";
import Review3 from "@/assets/images/poster3.webp";
import Review4 from "@/assets/images/poster4.gif";
import Review5 from "@/assets/images/poster5.gif";
import Review6 from "@/assets/images/poster6.gif";
import Review7 from "@/assets/images/poster7.gif";
import { ReviewCardType } from "@/types";

export const REVIEW_MOCK_DATA: ReviewCardType[] = [
  {
    reviewId: 1,
    profileImage: Profile,
    reviewImageList: [Review, Review1, Review2],
    nickName: "울랄라",
    starRating: "4.0",
    reviewContent:
      "크리스마스 밤, 클라라의 집에서 뭐가 벌어지는 것 같긴한데, 내용이 어떻게 될까요. 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까",
    location: "9층 B열 14번",
    locationReview: [
      "음향이 좋아요",
      "좌석 간격이 넓어요",
      "좌석이 편안해요",
      "시야가 탁 트여있어요",
      "주차가 편리해요",
    ],
    date: "2024.10.27",
    likeCount: "10",
  },
  {
    reviewId: 2,
    profileImage: Profile,
    reviewImageList: [Review3, Review4, Review5],
    nickName: "발레러버",
    starRating: "4.5",
    reviewContent:
      "발레단의 움직임이 정말 아름다웠어요. 특히 주인공의 독무 장면은 잊을 수 없을 것 같네요. 공연장의 분위기도 좋았고 객석에서 보이는 각도도 훌륭했습니다.",
    location: "1층 R열 23번",
    locationReview: [
      "시야가 탁 트여있어요",
      "좌석이 편안해요",
      "음향이 좋아요",
      "주차가 편리해요",
    ],
    date: "2024.10.25",
    likeCount: "15",
  },
  {
    reviewId: 3,
    profileImage: Profile,
    reviewImageList: [Review6, Review7, Review1],
    nickName: "공연매니아",
    starRating: "3.5",
    reviewContent:
      "무용수들의 실력은 훌륭했지만, 좌석이 좀 불편했네요. 앞좌석과의 간격이 좁아서 무릎이 불편했어요. 하지만 공연 자체는 매우 인상적이었습니다.",
    location: "2층 C열 7번",
    locationReview: [
      "좌석 간격이 좁아요",
      "시야 확보가 어려워요",
      "음향이 좋아요",
      "주차 공간이 부족해요",
    ],
    date: "2024.10.23",
    likeCount: "8",
  },
  {
    reviewId: 4,
    profileImage: Profile,
    reviewImageList: [Review2, Review3, Review4],
    nickName: "클래식팬",
    starRating: "5.0",
    reviewContent:
      "오케스트라의 연주가 정말 완벽했어요! 음향 시설이 잘 되어있어서 섬세한 소리까지 잘 들렸고, VIP석이라 그런지 시야도 정말 좋았습니다. 다음에도 또 오고 싶네요.",
    location: "VIP석 A열 12번",
    locationReview: [
      "음향이 좋아요",
      "시야가 탁 트여있어요",
      "좌석이 편안해요",
      "좌석 간격이 넓어요",
      "주차가 편리해요",
    ],
    date: "2024.10.20",
    likeCount: "25",
  },
  {
    reviewId: 5,
    profileImage: Profile,
    reviewImageList: [Review4, Review2, Review7, Review5, Review3],
    nickName: "드라큘미",
    starRating: "5.0",
    reviewContent:
      "크리스마스 밤, 클라라의 집에서 뭐가 벌어지는 것 같긴한데, 내용이 어떻게 될까요. 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히 디자인 작업 중 입니다만 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히 디자인 작업 중 입니다만 화이탱~~!! 크리스마스 밤, 클라라의 집에서 뭐가 벌어지는 것 같긴한데, 내용이 어떻게 될까요. 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히 디자인 작업 중 입니다만 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히 디자인 작업 중 입니다만 화이탱~~!! 내용이 어떻게 될까요. 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히 디자인 작업 중 입니다만 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시다",
    location: "VIP석 C열 8번",
    locationReview: [
      "음향이 좋아요",
      "시야가 탁 트여있어요",
      "좌석이 편안해요",
      "좌석 간격이 넓어요",
      "주차가 편리해요",
    ],
    date: "2024.11.14",
    likeCount: "100",
  },
];

/*
음향이 좋아요
음향이 나빠요
좌석 간격이 넓어요
좌석 간격이 좁아요
좌석이 편안해요
좌석이 불편해요
시야가 탁 트여있어요
시야 확보가 어려워요
주차가 편리해요
주차 공간이 부족해요
*/
