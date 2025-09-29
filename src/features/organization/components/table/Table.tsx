import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { mockData, type OrganizationData} from "./mockOrganizations";

export const TableComponent = () => {
  const columns: ColumnsType<OrganizationData> = [
    {
      title: "Divisiones",
      dataIndex: "division",
      key: "division",
      filters: [
        { text: "Marketing", value: "Marketing" },
        { text: "Ventas", value: "Ventas" },
        { text: "TI", value: "TI" },
      ],
      onFilter: (value, record) => record.division.includes(value as string),
      sorter: (a, b) => a.division.localeCompare(b.division),
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "División Superior",
      dataIndex: "superiorDivision",
      key: "superiorDivision",
      filters: [
        { text: "Dirección General", value: "Dirección General" },
        { text: "Operaciones", value: "Operaciones" },
      ],
      onFilter: (value, record) =>
        record.superiorDivision.includes(value as string),
      sorter: (a, b) => a.superiorDivision.localeCompare(b.superiorDivision),
    },
    {
      title: "Colaboradores",
      dataIndex: "members",
      key: "members",
      width: 140,
      sorter: (a, b) => a.members - b.members,
      render: (count) => <span>{count} miembros</span>,
    },
    {
      title: "Nivel",
      dataIndex: "level",
      key: "level",
      width: 120,
      filters: [
        { text: "Nivel 1", value: "Nivel 1" },
        { text: "Nivel 2", value: "Nivel 2" },
        { text: "Nivel 3", value: "Nivel 3" },
      ],
      onFilter: (value, record) => record.level === value,
      sorter: (a, b) => a.level.localeCompare(b.level),
    },
    {
      title: "Subdivisiones",
      dataIndex: "subdivisions",
      key: "subdivisions",
      sorter: (a, b) => a.subdivisions - b.subdivisions,
      render: (count) => <span>{count} subdivisiones</span>,
    },
    {
      title: "Embajadores",
      dataIndex: "ambassadors",
      key: "ambassadors",
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
