/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Avatar, Badge, Layout, Menu } from "antd";
import {
  Bell,
  LogOut,
  Settings,
  Music4Icon,
  Settings2Icon,
  YoutubeIcon,
  HelpCircleIcon,
  LayoutDashboard,
  VideoIcon,
} from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { isLoggedIn, removeUserInfo } from "@/redux/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useMyProfileQuery } from "@/redux/slices/admin/settingApi";
import { imageURL } from "@/redux/api/baseApi";
import { CiMusicNote1 } from "react-icons/ci";
import useVerification from "@/utils/isVerified";
import { RiPlayListAddFill } from "react-icons/ri";
const { Header, Sider, Content } = Layout;
import { MdAttachMoney } from "react-icons/md";
const { SubMenu } = Menu;
import { CiCircleInfo } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { MdPayments } from "react-icons/md";

import { SiSimpleanalytics } from "react-icons/si";
import { useEffect } from "react";
const menuItems = [
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
        title: "Success Tracks",
        icon: "",
      },
      {
        path: "/pending-track",
        title: "Pending Tracks",
        icon: "",
      },
      {
        path: "/correction-track",
        title: "Correction Tracks",
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
        title: "PendingVideos",
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

const onboardingItem = {
  path: "/verify",
  title: "Onboarding",
  icon: <CiMusicNote1 size={18} />,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const isUser = isLoggedIn();
  const userInfo = useVerification();
  const isVerifiedUser = userInfo?.isVerified;

  if (!isUser) {
    navigate("/auth/login");
  }

  const { data: userData } = useMyProfileQuery({});
  const myProfile = userData?.data;

  if (!isUser) {
    navigate("/auth/login");
  }

  const handleLogout = () => {
    removeUserInfo(authKey);
    navigate("/auth/login");
  };

  const filteredMenuItems = isVerifiedUser ? menuItems : [onboardingItem];

  return (
    <Layout>
      <Sider
        width={300}
        className="sidebar-menu"
        style={{
          overflow: "auto",
          height: "100vh",
          zIndex: 2,
          backgroundColor: "#03008D",
        }}
        trigger={null}
      >
        <Link to={"/"}>
          <img src={logo} alt="" className="mx-auto  mb-8 mt-5" />
        </Link>
        <Menu
          mode="inline"
          style={{ background: "#03008D", color: "white" }}
          defaultSelectedKeys={["1"]}
        >
          {filteredMenuItems.map((item, index) =>
            //@ts-ignore
            item.subMenu ? (
              <SubMenu
                key={`sub-${index}`}
                icon={item.icon}
                style={{ color: "#fff", fontSize: "16px" }}
                title={item.title}
              >
                {
                  //@ts-ignore
                  item.subMenu.map((subItem, subIndex) => (
                    <Menu.Item
                      key={`sub-${index}-${subIndex}`}
                      icon={subItem.icon}
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        marginBottom: "10px",
                      }}
                    >
                      <Link to={`${item.path}${subItem.path}`}>
                        {subItem.title}
                      </Link>
                    </Menu.Item>
                  ))
                }
              </SubMenu>
            ) : (
              <Menu.Item
                key={`item-${index}`}
                icon={item.icon}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            )
          )}
          {isVerifiedUser && (
            <Menu.Item
              key="500"
              className=""
              icon={<LogOut size={20} />}
              style={{ color: "#fff", fontSize: "16px" }}
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#03008D",
            height: "80px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="flex items-center gap-5">
            {isVerifiedUser && (
              <>
                <Badge count={11}>
                  <Link to={"/notifications"}>
                    <Bell size={30} color="#fff" />
                  </Link>
                </Badge>
                <div className="flex items-center gap-2">
                  <Link to={"/settings/profile"}>
                    <Avatar
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#87d068",
                      }}
                      src={`${imageURL}/${myProfile?.image}`}
                    />
                  </Link>
                  <Link to={"/settings/profile"}>
                    <h2 className="text-lg text-white">{myProfile?.name}</h2>
                  </Link>
                </div>
              </>
            )}
          </div>
        </Header>
        <Content
          style={{
            background: "#cec9ff",
            height: `calc(100vh - 80px)`,
          }}
        >
          <div className="bg-white h-[calc(100vh-100px)] m-2 rounded p-3 overflow-y-auto">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
