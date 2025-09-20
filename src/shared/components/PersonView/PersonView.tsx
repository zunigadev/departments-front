import { Avatar, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { userDropdownMenuItems, MENU_KEYS } from "../../config/menuConfig";
import { ROUTES } from "../../../app/config/routes.config";
import "./PersonView.less";

export const PersonView = () => {
  const navigate = useNavigate();

  const handleMenuClick = (key: string) => {
    switch (key) {
      case MENU_KEYS.PROFILE:
        navigate(ROUTES.PROFILE);
        break;
      case MENU_KEYS.SETTINGS:
        navigate(ROUTES.SETTINGS);
        break;
      case MENU_KEYS.LOGOUT:
        console.log("Cerrar sesión");
        break;
    }
  };

  return (
    <Dropdown 
      menu={{ 
        items: userDropdownMenuItems,
        onClick: ({ key }) => handleMenuClick(key)
      }} 
      trigger={['click']} 
      placement="bottomRight"
    >
      <div className="person-view-trigger">
        <Space size={8}>
          <Avatar 
            className="person-avatar" 
            icon={<UserOutlined />} 
          />
          <span className="person-name">Administrador</span>
          <DownOutlined className="person-arrow" />
        </Space>
      </div>
    </Dropdown>
  );
};