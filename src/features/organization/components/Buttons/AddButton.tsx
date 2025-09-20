import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface AddButtonProps {
  onClick?: () => void;
  text?: string;
}

export const AddButton = ({ onClick }: AddButtonProps = {}) => {
  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={onClick}/>
  );
};