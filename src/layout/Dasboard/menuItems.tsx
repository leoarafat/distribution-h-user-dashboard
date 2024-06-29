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
    path: "/legal",
    title: "Legal",
    icon: <CiCircleInfo size={18} />,
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
