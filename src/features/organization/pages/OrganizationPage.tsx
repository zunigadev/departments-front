import { Button, Input, Tabs, type TabsProps } from "antd";

import Header from "../components/header/Header";
import { Divisions } from "../components/Divisions/Divisions";


const OrganizationPage = () => {
  

  const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Divisiones',
    children: <Divisions />,
  },
  {
    key: '2',
    label: 'Colaboradores',
    children: 'Sección de colaboradores',
  }
];

  return (
    <div style={{ padding: "0 24px" }}>
      {/* Header Section */}
      <Header 
        title="Organización"
      />

      {/* Actions Section */}
      <Tabs defaultActiveKey="1" items={items}  />
    </div>
  );
};

export default OrganizationPage;