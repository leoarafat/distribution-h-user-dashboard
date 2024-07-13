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
  SendHorizontal,
} from "lucide-react";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import PendingReleaseIcon from "@mui/icons-material/HourglassFull";
import { ShieldAlert } from "lucide-react";
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
        icon: <Music4Icon size={18} color="#fff" />,
      },
      {
        path: "/pending-track",
        title: "Pending Release",
        icon: <PendingReleaseIcon style={{ fontSize: 18, color: "white" }} />,
      },
      {
        path: "/correction-track",
        title: "Correction Request",
        icon: <ShieldAlert size={18} style={{ color: "white" }} />,
      },
      {
        path: "/drafts",
        title: "Drafts",
        icon: <CiCircleInfo size={18} color="white" />,
      },
      {
        path: "/videos",
        title: "Videos",
        icon: <VideoIcon size={18} color="white" />,
      },

      {
        path: "/pending-videos",
        title: "Pending Videos",
        icon: <PendingReleaseIcon style={{ fontSize: 18, color: "white" }} />,
      },
      {
        path: "/correction-videos",
        title: "Correction Videos",
        icon: <ShieldAlert size={18} style={{ color: "white" }} />,
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
        icon: <MdPayments size={18} />,
      },
      {
        path: "/financial-reports",
        title: "Financial Reports",
        icon: <SiSimpleanalytics size={18} />,
      },
      {
        path: "/financial-analytics",
        title: "Financial Analytics",
        icon: <SiSimpleanalytics size={18} />,
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
        title: "Facebook Claim Release",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/whiteList-request",
        title: "WhiteLists",
        icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
      },
      {
        path: "/youtube-claim-request",
        title: "Youtube Claim Release",
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
        icon: <MdPayments size={18} />,
      },
      {
        path: "/my-account",
        title: "Payout Info",
        icon: <MdPayments size={18} />,
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
        icon: <Settings size={18} />,
      },
      {
        path: "/change-password",
        title: "Change password",
        icon: <Settings size={18} />,
      },
    ],
  },
  {
    path: "/help",
    title: "Help",
    icon: <HelpCircleIcon size={18} />,
  },
];
// import { CiCircleInfo } from "react-icons/ci";
// import { MdPayments } from "react-icons/md";
// import { SiSimpleanalytics } from "react-icons/si";
// import {
//   Settings,
//   Music4Icon,
//   Settings2Icon,
//   YoutubeIcon,
//   HelpCircleIcon,
//   LayoutDashboard,
//   VideoIcon,
//   SendHorizontal,
// } from "lucide-react";
// import { RiPlayListAddFill } from "react-icons/ri";
// import { MdAttachMoney } from "react-icons/md";
// import PendingReleaseIcon from "@mui/icons-material/HourglassFull";
// import { ShieldAlert } from "lucide-react";

// export const menuItems = [
//   {
//     key: "1",
//     path: "/",
//     title: "Overview",
//     icon: <LayoutDashboard size={18} />,
//   },
//   {
//     key: "2",
//     path: "/upload",
//     title: "Upload Music",
//     icon: <RiPlayListAddFill size={18} />,
//   },
//   {
//     key: "3",
//     path: "/release-video",
//     title: "Upload Video",
//     icon: <VideoIcon size={18} />,
//   },
//   {
//     key: "4",
//     path: "/my-uploads",
//     title: "My Uploads",
//     icon: <Music4Icon size={18} color="#fff" />,
//     children: [
//       {
//         key: "4-1",
//         path: "/my-uploads/success-track",
//         title: "Music",
//         icon: <Music4Icon size={18} color="#fff" />,
//       },
//       {
//         key: "4-2",
//         path: "/my-uploads/pending-track",
//         title: "Pending Release",
//         icon: <PendingReleaseIcon style={{ fontSize: 18, color: "white" }} />,
//       },
//       {
//         key: "4-3",
//         path: "/my-uploads/correction-track",
//         title: "Correction Request",
//         icon: <ShieldAlert size={18} style={{ color: "white" }} />,
//       },
//       {
//         key: "4-4",
//         path: "/my-uploads/drafts",
//         title: "Drafts",
//         icon: <CiCircleInfo size={18} color="white" />,
//       },
//       {
//         key: "4-5",
//         path: "/my-uploads/videos",
//         title: "Videos",
//         icon: <VideoIcon size={18} color="white" />,
//       },
//       {
//         key: "4-6",
//         path: "/my-uploads/pending-videos",
//         title: "Pending Videos",
//         icon: <PendingReleaseIcon style={{ fontSize: 18, color: "white" }} />,
//       },
//       {
//         key: "4-7",
//         path: "/my-uploads/correction-videos",
//         title: "Correction Videos",
//         icon: <ShieldAlert size={18} style={{ color: "white" }} />,
//       },
//     ],
//   },
//   {
//     key: "5",
//     path: "/artist-management",
//     title: "Artist & Label Manage",
//     icon: <Settings2Icon size={18} />,
//   },
//   {
//     key: "6",
//     path: "/analytics",
//     title: "Analytics",
//     icon: <SiSimpleanalytics size={18} />,
//   },
//   {
//     key: "7",
//     path: "/financial",
//     title: "Financial",
//     icon: <MdAttachMoney size={18} color="#fff" />,
//     children: [
//       {
//         key: "7-1",
//         path: "/financial/financial-operations",
//         title: "Payment & operation",
//         icon: <MdPayments size={18} />,
//       },
//       {
//         key: "7-2",
//         path: "/financial/financial-reports",
//         title: "Financial Reports",
//         icon: <SiSimpleanalytics size={18} />,
//       },
//       {
//         key: "7-3",
//         path: "/financial/financial-analytics",
//         title: "Financial Analytics",
//         icon: <SiSimpleanalytics size={18} />,
//       },
//     ],
//   },
//   {
//     key: "8",
//     path: "/claims",
//     title: "Legal",
//     icon: <CiCircleInfo size={18} color="white" />,
//     children: [
//       {
//         key: "8-1",
//         path: "/claims/manage",
//         title: "Legals",
//         icon: <SendHorizontal style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-2",
//         path: "/claims/artist-channel-request",
//         title: "Artist Channels",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-3",
//         path: "/claims/tikTok-claim-request",
//         title: "TikTok Claims",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-4",
//         path: "/claims/facebook-whiteList-request",
//         title: "Facebook WhiteLists",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-5",
//         path: "/claims/facebook-claim-request",
//         title: "Facebook Claim Release",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-6",
//         path: "/claims/whiteList-request",
//         title: "WhiteLists",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-7",
//         path: "/claims/youtube-claim-request",
//         title: "Youtube Claim Release",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-8",
//         path: "/claims/youtube-manual-claim",
//         title: "Youtube Manual Claims",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//       {
//         key: "8-9",
//         path: "/claims/youtube-take-down",
//         title: "Youtube Take Downs",
//         icon: <PendingReleaseIcon style={{ fontSize: 20, color: "white" }} />,
//       },
//     ],
//   },
//   {
//     key: "9",
//     path: "/manage-account",
//     title: "Payout Details",
//     icon: <MdPayments size={18} color="#fff" />,
//     children: [
//       {
//         key: "9-1",
//         path: "/manage-account/add-account",
//         title: "Add Bank Details",
//         icon: <MdPayments size={18} />,
//       },
//       {
//         key: "9-2",
//         path: "/manage-account/my-account",
//         title: "Payout Info",
//         icon: <MdPayments size={18} />,
//       },
//     ],
//   },
//   {
//     key: "10",
//     path: "/settings",
//     title: "Settings",
//     icon: <Settings size={18} color="#fff" />,
//     children: [
//       {
//         key: "10-1",
//         path: "settings/profile",
//         title: "Manage Profile",
//         icon: <Settings size={18} />,
//       },
//       {
//         key: "10-2",
//         path: "settings/change-password",
//         title: "Change password",
//         icon: <Settings size={18} />,
//       },
//     ],
//   },
//   {
//     key: "11",
//     path: "/help",
//     title: "Help",
//     icon: <HelpCircleIcon size={18} />,
//   },
// ];
