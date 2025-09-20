import { Layout, Menu } from "antd";
import { PersonView } from "../PersonView/PersonView";
import "./Navbar.less";
import { useLocation, useNavigate } from "react-router-dom";
import { getRouteByKey, navbarItems } from "../../../app/config/routes.config";

const { Header } = Layout;


export const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const getActiveKey = (): string[] => {
    const pathToKey: Record<string, string> = {
      '/dashboard': 'dashboard',
      '/organization': 'organization',
      '/models': 'models',
      '/tracking': 'tracking',
    };
    const activeKey = pathToKey[location.pathname];
    return activeKey ? [activeKey] : [];
  };

  const handleMenuClick = (e: { key: string }) => {
    navigate(getRouteByKey(e.key));
  };

  return (
    <Header className="navbar">
      <Menu
        mode="horizontal"
        selectedKeys={getActiveKey()}
        items={navbarItems}
        onClick={handleMenuClick}
      />
      <div className="person-view">
        <PersonView />
      </div>
    </Header>
  );
};