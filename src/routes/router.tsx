import { TosPage } from "@/pages/Tos/page";
import { LoginPage } from "@/pages/Login/page";
import { NicknameCreatePage } from "@/pages/Onboarding/UserRegistration/Nickname/page";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { MainPage } from "@/pages/Main/page";
import RoutePath from "./routePath";
import { CompleteRegistrationPage } from "@/pages/Onboarding/CompleteRegistration/page";
import { SelectProfilePage } from "@/pages/Onboarding/UserRegistration/Profile/page";
import { SelectPricePage } from "@/pages/Onboarding/UserRegistration/Price/page";
import { SelectLocationPage } from "@/pages/Onboarding/UserRegistration/Location/page";
import { SelectConceptPage } from "@/pages/Onboarding/UserRegistration/Concept/page";
import { SelectFeaturePage } from "@/pages/Onboarding/UserRegistration/Feature/page";
import Layout from "@/components/Layout";
import { ReviewPage } from "@/pages/Review/page";
import { ReviewDetailPage } from "@/pages/Review/[id]/page";
import { ShowDetailPage } from "@/pages/ShowDetail/page";
import ScrollTop from "@/components/common/ScrollTop";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <ScrollTop />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <LoginPage /> },
      { path: RoutePath.Tos, element: <TosPage /> },
      {
        path: RoutePath.Create,
        children: [
          { index: true, element: <NicknameCreatePage /> },
          { path: RoutePath.CreateProfile, element: <SelectProfilePage /> },
          { path: RoutePath.CreatePrice, element: <SelectPricePage /> },
          { path: RoutePath.CreateLocation, element: <SelectLocationPage /> },
          { path: RoutePath.CreateConcept, element: <SelectConceptPage /> },
          { path: RoutePath.CreateFeature, element: <SelectFeaturePage /> },
          {
            path: RoutePath.CreateComplete,
            element: <CompleteRegistrationPage />,
          },
        ],
      },
      {
        path: RoutePath.Show,
        element: <Layout />,
        children: [{ index: true, element: <ShowDetailPage /> }],
      },
      {
        path: RoutePath.ShowReviews,
        children: [
          { index: true, element: <ReviewPage /> },
          {
            path: RoutePath.ShowReviewDetail,
            element: <ReviewDetailPage />,
          },
        ],
      },
      {
        element: <Layout />,
        children: [{ path: RoutePath.Main, element: <MainPage /> }],
      },
    ],
  },
  { path: "*", element: <div>Not found page</div> },
];

const Router = createBrowserRouter(routes);

export default Router;
