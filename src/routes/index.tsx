import Auth from "@/layout/Auth/Auth";
import Dashboard from "@/layout/Dasboard/Dashboard";
import About from "@/pages/About";
import AddProduct from "@/pages/AddProduct";
import Category from "@/pages/Category";
import ChangePassword from "@/pages/ChangePassword";
import CoverPage from "@/pages/CoverPage";
import CreateOffer from "@/pages/CreateOffer";
import DashboardHome from "@/pages/DashboardHome";
import EditProduct from "@/pages/EditProduct";
import FAQPage from "@/pages/FAQ";
import Feedback from "@/pages/Feedback";
import ForgetPassword from "@/pages/ForgetPassword";
import MakeAdmin from "@/pages/MakeAdmin";
import NotificationList from "@/pages/Notification";
import OrderManagement from "@/pages/OrderManagement";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ProductManagement from "@/pages/ProductManagement";
import Profile from "@/pages/Profile";
import PromoCode from "@/pages/PromoCode";
import SetNewPassword from "@/pages/SetNewPassword";
import Settings from "@/pages/Settings";
import SubCategory from "@/pages/SubCategory";
import TermsAndCondition from "@/pages/TermsAndCondition";
import UserManagement from "@/pages/UserManagement";
import VerifyEmail from "@/pages/VerifyEmail";
import StepperForm from "@/components/SteperForm/SetperForm";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import Verify from "@/components/Active-User/ActiveUser";
import Test from "@/pages/Test";

import { createBrowserRouter } from "react-router-dom";
import IsVerifiedRoutes from "./VerifiedRoutes/VerifyProtect";
import Uploads from "@/components/Uplaods/Uploads";
import UploadSingle from "@/components/Uplaods/UploadSingle/UploadSingle";
import UploadAlbum from "@/components/Uplaods/UploadAlbum/UploadAlbum";
import ArtistLabelManagement from "@/components/ArtisLabelManagement/ArtisLabelManagement";
import YoutubeManage from "@/components/Youtube/Youtube";
import MyUploads from "@/components/MyUploads/MyUploads";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: (
          <IsVerifiedRoutes>
            <DashboardHome />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/upload",
        element: (
          <IsVerifiedRoutes>
            <Uploads />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/single",
        element: (
          <IsVerifiedRoutes>
            <UploadSingle />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/album",
        element: (
          <IsVerifiedRoutes>
            <UploadAlbum />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/artist-management",
        element: (
          <IsVerifiedRoutes>
            <ArtistLabelManagement />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/my-uploads",
        element: (
          <IsVerifiedRoutes>
            <MyUploads />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/youtube-request",
        element: (
          <IsVerifiedRoutes>
            <YoutubeManage />
          </IsVerifiedRoutes>
        ),
      },

      {
        path: "/verify",
        element: <StepperForm />,
      },

      {
        path: "/notifications",
        element: (
          <IsVerifiedRoutes>
            <NotificationList />
          </IsVerifiedRoutes>
        ),
      },

      {
        path: "/cover",
        element: (
          <IsVerifiedRoutes>
            <CoverPage />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/settings",
        element: (
          <IsVerifiedRoutes>
            <Settings />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/settings/terms-and-conditions",
        element: (
          <IsVerifiedRoutes>
            <TermsAndCondition />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/settings/privacy-policy",
        element: (
          <IsVerifiedRoutes>
            <PrivacyPolicy />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/settings/about",
        element: (
          <IsVerifiedRoutes>
            <About />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/settings/faq",
        element: (
          <IsVerifiedRoutes>
            <FAQPage />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/settings/profile",
        element: (
          <IsVerifiedRoutes>
            <Profile />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/settings/change-password",
        element: (
          <IsVerifiedRoutes>
            <ChangePassword />
          </IsVerifiedRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/verify",
        element: <Verify />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/auth/verify",
        element: <VerifyEmail />,
      },
      {
        path: "/auth/set-new-password/:id",
        element: <SetNewPassword />,
      },
    ],
  },
]);

export default router;
