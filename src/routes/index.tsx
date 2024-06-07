import Auth from "@/layout/Auth/Auth";
import Dashboard from "@/layout/Dasboard/Dashboard";
import ChangePassword from "@/pages/ChangePassword";
import ForgetPassword from "@/pages/ForgetPassword";
import NotificationList from "@/pages/Notification";
import Profile from "@/pages/Profile";
import SetNewPassword from "@/pages/SetNewPassword";
import Settings from "@/pages/Settings";
import VerifyEmail from "@/pages/VerifyEmail";
import StepperForm from "@/components/SteperForm/SetperForm";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import Verify from "@/components/Active-User/ActiveUser";
import { createBrowserRouter } from "react-router-dom";
import IsVerifiedRoutes from "./VerifiedRoutes/VerifyProtect";
import Uploads from "@/components/Uplaods/Uploads";
import UploadAlbum from "@/components/Uplaods/UploadAlbum/UploadAlbum";
import ArtistLabelManagement from "@/components/ArtisLabelManagement/ArtisLabelManagement";
import HelpPage from "@/components/Help/Help";
import ManageAccount from "@/components/ManageAccount/ManageAccount";
import DashboardHome from "@/components/DashboardHome/DashboardHome";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import UploadVideo from "@/components/Uplaods/UplaodVideo/UploadVideo";
import AnalyticsPage from "@/components/Analytics/AnalyticsPage";
import FinancialAnalytics from "@/components/Financial/FinancialAnalytics";
import FinancialReports from "@/components/Financial/FinancialReports";
import AccountDetails from "@/components/ManageAccount/AccountDetails/AccountDetails";
import PaymentOperations from "@/components/ManageAccount/PaymentOperations/PaymentOperations";
import TransactionHistory from "@/components/ManageAccount/TransactionHistory/TransactionHistory";
import UploaderStepperForm from "@/components/SteperForm/UploaderStepper";
import SuccessRelease from "@/components/MyUploads/SuccessRelease/SuccessRelease";
import FinalizeMusic from "@/components/MyUploads/FinalizeMusic/FinalizeMusic";
import Drafts from "@/components/MyUploads/Drafts/Drafts";
import PendingVideos from "@/components/MyUploads/PendingVideos/PendingVideos";
import SuccessVideos from "@/components/MyUploads/SuccessVideos/SuccessVideos";
import DigitalRightsManagementPage from "@/components/Youtube/DigitalRightsManagementPage/DigitalRightsManagementPage";
import CorrectionMusic from "@/components/MyUploads/CorrectionMusic/CorrectionMusic";

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
        path: "/release-video",
        element: (
          <IsVerifiedRoutes>
            <UploadVideo />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/single",
        element: (
          <IsVerifiedRoutes>
            <UploaderStepperForm />
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
        path: "/my-uploads/success-track",
        element: (
          <IsVerifiedRoutes>
            <SuccessRelease />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/my-uploads/pending-track",
        element: (
          <IsVerifiedRoutes>
            <FinalizeMusic />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/my-uploads/drafts",
        element: (
          <IsVerifiedRoutes>
            <Drafts />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/my-uploads/pending-videos",
        element: (
          <IsVerifiedRoutes>
            <PendingVideos />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/my-uploads/correction-track",
        element: (
          <IsVerifiedRoutes>
            <CorrectionMusic />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/my-uploads/videos",
        element: (
          <IsVerifiedRoutes>
            <SuccessVideos />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/analytics",
        element: (
          <IsVerifiedRoutes>
            <AnalyticsPage />
          </IsVerifiedRoutes>
        ),
      },

      {
        path: "/verify",
        element: (
          <PrivateRoutes>
            <StepperForm />
          </PrivateRoutes>
        ),
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
        path: "/legal",
        element: (
          <IsVerifiedRoutes>
            <DigitalRightsManagementPage />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/help",
        element: (
          <IsVerifiedRoutes>
            <HelpPage />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/manage-account/add-account",
        element: (
          <IsVerifiedRoutes>
            <ManageAccount />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/transaction-history",
        element: (
          <IsVerifiedRoutes>
            <TransactionHistory />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/manage-account/my-account",
        element: (
          <IsVerifiedRoutes>
            <AccountDetails />
          </IsVerifiedRoutes>
        ),
      },

      {
        path: "/financial/financial-reports",
        element: (
          <IsVerifiedRoutes>
            <FinancialReports />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/financial/financial-analytics",
        element: (
          <IsVerifiedRoutes>
            <FinancialAnalytics />
          </IsVerifiedRoutes>
        ),
      },
      {
        path: "/financial/financial-operations",
        element: (
          <IsVerifiedRoutes>
            <PaymentOperations />
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
