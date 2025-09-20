import { Table, Tag, Space, Button, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

// Tipo para los datos de organización
interface OrganizationData {
  key: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
  createdAt: string;
  members: number;
}

// Datos de ejemplo
const mockData: OrganizationData[] = [
  {
    key: "1",
    id: "ORG-001",
    name: "Empresa ABC S.A.C.",
    email: "contacto@empresaabc.com",
    phone: "+51 999 888 777",
    status: "active",
    createdAt: "2024-01-15",
    members: 25,
  },
  {
    key: "2", 
    id: "ORG-002",
    name: "Corporación XYZ",
    email: "info@corpxyz.com",
    phone: "+51 888 777 666",
    status: "active",
    createdAt: "2024-02-20",
    members: 12,
  },
  {
    key: "3",
    id: "ORG-003",
    name: "Startup Tech",
    email: "hello@startuptech.com",
    phone: "+51 777 666 555",
    status: "inactive",
    createdAt: "2024-03-10",
    members: 8,
  },
];

export const TableComponent = () => {
  const handleView = (record: OrganizationData) => {
    console.log("Ver:", record);
  };

  const handleEdit = (record: OrganizationData) => {
    console.log("Editar:", record);
  };

  const handleDelete = (record: OrganizationData) => {
    console.log("Eliminar:", record);
  };

  const columns: ColumnsType<OrganizationData> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Teléfono",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Miembros",
      dataIndex: "members",
      key: "members",
      width: 100,
      sorter: (a, b) => a.members - b.members,
      render: (count) => <span>{count} miembros</span>,
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      width: 100,
      filters: [
        { text: "Activo", value: "active" },
        { text: "Inactivo", value: "inactive" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status === "active" ? "Activo" : "Inactivo"}
        </Tag>
      ),
    },
    {
      title: "Fecha Creación",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 120,
      sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Acciones",
      key: "actions",
      width: 150,
      fixed: "right",
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Ver detalles">
            <Button
              type="text"
              icon={<EyeOutlined />}
              onClick={() => handleView(record)}
            />
          </Tooltip>
          <Tooltip title="Editar">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Tooltip>
          <Tooltip title="Eliminar">
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={mockData}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} de ${total} organizaciones`,
      }}
      scroll={{ x: 1000 }}
      size="middle"
      bordered
    />
  );
};