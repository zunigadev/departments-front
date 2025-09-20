import { Card, Typography, Space, Button, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { TableComponent } from "../components/table/Table";

const { Title } = Typography;
const { Search } = Input;

const OrganizationPage = () => {
  const handleAddNew = () => {
    console.log("Agregar nueva organización");
  };

  const handleSearch = (value: string) => {
    console.log("Buscar:", value);
  };

  return (
    <div style={{ padding: "0 24px" }}>
      {/* Header Section */}
      <div style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          Organización
        </Title>
        <Typography.Text type="secondary">
          Gestiona la información de tu organización
        </Typography.Text>
      </div>

      {/* Actions Section */}
      <Card style={{ marginBottom: 24 }}>
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Search
            placeholder="Buscar organizaciones..."
            allowClear
            onSearch={handleSearch}
            style={{ width: 300 }}
            prefix={<SearchOutlined />}
          />
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={handleAddNew}
          >
            Agregar Organización
          </Button>
        </Space>
      </Card>

      {/* Table Section */}
      <Card>
        <TableComponent />
      </Card>
    </div>
  );
};

export default OrganizationPage;