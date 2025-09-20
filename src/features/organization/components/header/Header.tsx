import { Typography, Space } from "antd";
import './Header.less';
import { AddButton } from "../Buttons/AddButton";
import { ImportButton } from "../Buttons/ImportBotton";

const { Title, Text } = Typography;

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  const handleAddClick = () => {
    console.log("Add button clicked from Header");
  };

  const handleImportClick = () => {
    console.log("Import button clicked from Header");
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <Title level={2} className="header-title">
          {title}
        </Title>
        <Text type="secondary">{description}</Text>
      </div>
      <Space className="header-actions">
        <AddButton onClick={handleAddClick} />
        <ImportButton onClick={handleImportClick} />
      </Space>
    </div>
  );
};

export default Header;