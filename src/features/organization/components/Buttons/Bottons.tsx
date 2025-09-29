import { DownloadOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import './Buttons.less';

interface ImportButtonProps {
  onClick?: () => void;
  text?: string;
}

interface ExportButtonProps {
  onClick: () => void;
}

interface AddButtonProps {
  onClick?: () => void;
  text?: string;
}

export const AddButton = ({ onClick }: AddButtonProps = {}) => {
  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={onClick}/>
  );
};

export const ImportButton = ({ onClick }: ImportButtonProps = {}) => {
  return (
    <Button type="primary" className="report-button" icon={<DownloadOutlined />} onClick={onClick} />
  );
};

export const ExportButton = ({ onClick }: ExportButtonProps) => {
  return (
    <Button type="primary" className="report-button" icon={<UploadOutlined/>} onClick={onClick}/>
    )
  };