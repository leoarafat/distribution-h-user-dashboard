import { CiCircleInfo } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import {
  Settings,
  Music4Icon,
  Settings2Icon,
  YoutubeIcon,
  HelpCircleIcon,
  LayoutDashboard,
  VideoIcon,
} from "lucide-react";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import PendingReleaseIcon from "@mui/icons-material/HourglassFull";
import { SendHorizontal } from "lucide-react";
export const menuItems = [
  {
    path: "/",
    title: "Overview",
    icon: <LayoutDashboard size={18} />,
  },
  {
    path: "/upload",
    title: "Upload Music",
    icon: <RiPlayListAddFill size={18} />,
  },
  {
    path: "/release-video",
    title: "Upload Video",
    icon: <VideoIcon size={18} />,
  },

  {
    path: "/my-uploads",
    title: "My Uploads",
    icon: <Music4Icon size={18} color="#fff" />,
    subMenu: [
      {
        path: "/success-track",
        title: "Music",
        icon: "",
      },
      {
        path: "/pending-track",
        title: "Pending Release",
        icon: "",
      },
      {
        path: "/correction-track",
        title: "Correction Request",
        icon: "",
      },
      {
        path: "/drafts",
        title: "Drafts",
        icon: "",
      },
      {
        path: "/videos",
        title: "Videos",
        icon: "",
      },
      {
        path: "/pending-videos",
        title: "Pending Videos",
        icon: "",
      },
    ],
  },
  {
    path: "/artist-management",
    title: "Artist & Label Manage",
    icon: <Settings2Icon size={18} />,
  },

  {
    path: "/analytics",
    title: "Analytics",
    icon: <SiSimpleanalytics size={18} />,
  },

  {
    path: "/financial",
    title: "Financial",
    icon: <MdAttachMoney size={18} color="#fff" />,
    subMenu: [
      {
        path: "/financial-operations",
        title: "Payment & operation",
        icon: "",
      },
      {
        path: "/financial-reports",
        title: "Financial Reports",
        icon: "",
      },
      {
        path: "/financial-analytics",
        title: "Financial Analytics",
        icon: "",
      },
    ],
  },
  {
    path: "/claims",
    title: "Legal",
    icon: <CiCircleInfo size={18} color="white" />,
    subMenu: [
      {
        path: "/manage",
        title: "Legals",
        icon: <SendHorizontal style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/artist-channel-request",
        title: "Artist Channels",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/tikTok-claim-request",
        title: "TikTok Claims",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/facebook-whiteList-request",
        title: "Facebook WhiteLists",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/facebook-claim-request",
        title: "Facebook Claims",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/whiteList-request",
        title: "WhiteLists",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/youtube-claim-request",
        title: "Youtube Claims",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/youtube-manual-claim",
        title: "Youtube Manual Claims",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/youtube-take-down",
        title: "Youtube Take Downs",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
    ],
  },

  {
    path: "/manage-account",
    title: "Payout Details",
    icon: <MdPayments size={18} color="#fff" />,
    subMenu: [
      {
        path: "/add-account",
        title: "Add Bank Details",
        icon: "",
      },
      {
        path: "/my-account",
        title: "Payout Info",
        icon: "",
      },
    ],
  },
  {
    path: "/settings",
    title: "Settings",
    icon: <Settings size={18} color="#fff" />,
    subMenu: [
      {
        path: "/profile",
        title: "Manage Profile",
        icon: "",
      },
      {
        path: "/change-password",
        title: "Change password",
        icon: "",
      },
    ],
  },
  {
    path: "/help",
    title: "Help",
    icon: <HelpCircleIcon size={18} />,
  },
];
