import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import './Buttons.less';

interface ImportButtonProps {
  onClick?: () => void;
  text?: string;
}

export const ImportButton = ({ onClick }: ImportButtonProps = {}) => {
  return (
    <Button type="primary" className="import-button" icon={<DownloadOutlined />} onClick={onClick} />
  );
};