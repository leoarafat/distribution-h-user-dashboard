/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Avatar, Badge, Layout, Menu } from "antd";
import { Bell, LogOut } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { isLoggedIn, removeUserInfo } from "@/redux/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useMyProfileQuery } from "@/redux/slices/admin/settingApi";
import { imageURL } from "@/redux/api/baseApi";
import { CiMusicNote1 } from "react-icons/ci";
import useVerification from "@/utils/isVerified";
import { menuItems } from "./menuItems";
import useApproved from "@/utils/isApproved";
import { useEffect } from "react";
const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const onboardingItem = {
  path: "/verify",
  title: "Onboarding",
  icon: <CiMusicNote1 size={18} />,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const isUser = isLoggedIn();
  const userInfo = useVerification();
  const userVerifiedInfo = useApproved();
  const isVerifiedUser = userInfo?.isVerified;
  const isApproved = userVerifiedInfo?.isApproved;
  useEffect(() => {
    if (!isUser) {
      navigate("/auth/login");
    }

    if (!isApproved) {
      navigate("/pending");
    }
  }, [isUser, isApproved, navigate]);
  const { data: userData } = useMyProfileQuery({});
  const myProfile = userData?.data;

  const handleLogout = () => {
    removeUserInfo(authKey);
    navigate("/auth/login");
  };

  // Add the logout item
  const logoutItem = {
    key: "logout",
    title: "Logout",
    icon: <LogOut size={18} />,
    onClick: handleLogout,
  };

  const filteredMenuItems =
    isVerifiedUser && isApproved
      ? [...menuItems, logoutItem]
      : [onboardingItem, logoutItem];

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
                onClick={item.onClick}
              >
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            )
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
                  <Link
                    className="flex justify-between items-center"
                    to={"/settings/profile"}
                  >
                    <h2 className="text-lg text-white">{myProfile?.name}</h2>
                    <p className="text-small text-white">
                      ({myProfile?.clientId})
                    </p>
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
