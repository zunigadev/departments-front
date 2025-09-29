import { Typography, Space } from "antd";
import "./Header.less";
import { AddButton, ExportButton, ImportButton } from "../Buttons/Bottons";

const { Title } = Typography;


interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const handleAddClick = () => {
    console.log("Add button clicked from Header");
  };

  const handleImportClick = () => {
    console.log("Import button clicked from Header");
  };

  const handleExportClick = () => {
    console.log("Export button clicked from Header");
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <Title level={2} className="header-title">
          {title}
        </Title>
      </div>
      <Space className="header-actions">
        <AddButton onClick={handleAddClick} />
        <ImportButton onClick={handleImportClick} />
        <ExportButton onClick={handleExportClick} />
      </Space>
    </div>
  );
};

export default Header;
