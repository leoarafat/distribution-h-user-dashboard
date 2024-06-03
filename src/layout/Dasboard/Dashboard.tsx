/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Avatar, Badge, Layout, Menu } from "antd";
import {
  Bell,
  ListOrdered,
  LogOut,
  Plus,
  Settings,
  ShieldPlus,
  ShoppingCart,
  SquareMenu,
  Tag,
  Users,
  Container,
  Image,
  MessageSquareReply,
  Music4Icon,
  Settings2Icon,
  YoutubeIcon,
} from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { isLoggedIn, removeUserInfo } from "@/redux/services/auth.service";
import { authKey } from "@/constants/storageKey";
import {
  useMyProfileQuery,
  useNotificationsQuery,
} from "@/redux/slices/admin/settingApi";
import { imageURL } from "@/redux/api/baseApi";
import { CiMusicNote1 } from "react-icons/ci";
import useVerification from "@/utils/isVerified";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const menuItems = [
  {
    path: "/upload",
    title: "Upload Music",
    icon: <Music4Icon size={18} />,
  },
  {
    path: "/artist-management",
    title: "Artist & Label Manage",
    icon: <Settings2Icon size={18} />,
  },
  {
    path: "/youtube-request",
    title: "Youtube Request",
    icon: <YoutubeIcon size={18} />,
  },
  {
    path: "/product-management",
    title: "Product Management",
    icon: <ShoppingCart size={18} />,
  },
  {
    path: "/add-product",
    title: "Add Products",
    icon: <Plus size={18} />,
  },
  {
    path: "/order-management",
    title: "Order Management",
    icon: <ListOrdered size={18} />,
  },
  {
    path: "/user-management",
    title: "User Management",
    icon: <Users size={18} />,
  },
  {
    path: "/categories",
    title: "Categories",
    icon: <SquareMenu size={18} color="#fff" />,
    subMenu: [
      {
        path: "/category",
        title: "Categories",
        icon: "",
      },
      {
        path: "/sub-category",
        title: "Sub Category",
        icon: "",
      },
    ],
  },
  {
    path: "/create-offer",
    title: "Create Offer",
    icon: <Tag size={18} />,
  },
  {
    path: "/promo-code",
    title: "Promo Code",
    icon: <Container size={18} />,
  },
  {
    path: "/feedback",
    title: "Feedback",
    icon: <MessageSquareReply size={18} />,
  },
  {
    path: "/settings",
    title: "Settings",
    icon: <Settings size={18} color="#fff" />,
    subMenu: [
      {
        path: "/terms-and-conditions",
        title: "Terms and Conditions",
        icon: "",
      },
      {
        path: "/privacy-policy",
        title: "Privacy Policy",
        icon: "",
      },
      {
        path: "/about",
        title: "About",
        icon: "",
      },
      {
        path: "/faq",
        title: "FAQ",
        icon: "",
      },
      {
        path: "/profile",
        title: "Profile",
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
    path: "/make-admin",
    title: "Make Admin",
    icon: <ShieldPlus size={18} />,
  },
  {
    path: "/cover",
    title: "Cover Page",
    icon: <Image size={18} />,
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

  const { data: notifications } = useNotificationsQuery({});
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
          backgroundColor: "#5B52A3",
        }}
        trigger={null}
      >
        <Link to={"/"}>
          <img src={logo} alt="" className="mx-auto h-[50px] mb-8 mt-5" />
        </Link>
        <Menu
          mode="inline"
          style={{ background: "#5B52A3", color: "white" }}
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
            background: "#5B52A3",
            height: "80px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className="flex items-center gap-5">
            {isVerifiedUser && (
              <>
                <Badge count={notifications?.unreadNotifications}>
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
