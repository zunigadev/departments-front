import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Segmented, Space, Dropdown } from "antd";
import Search from "antd/es/input/Search";
import { TableComponent } from "../table/Table";
import { useState } from "react";
import "./Divisions.less";

export const Divisions = () => {
  const options = ["Listado", "Arbol"];
  const [selected, setSelected] = useState("Listado");

  const handleMenuClick = ({ key }: { key: string }) => {
    console.log("Opción seleccionada:", key);
  };

  const handleSearch = (value: string) => {
    console.log("Buscar:", value);
  };

  const dropdownItems = [
    {
      key: "1",
      label: "Agregar Organización",
    },
    {
      key: "2",
      label: "Otra acción",
    },
  ];

  return (
    <>
      {selected === "Listado" ? (
        <div className="divisions-container">
          <Space className="divisions-header">
            <div>
              <Flex gap="small" align="flex-start" vertical>
                <Segmented
                  options={options}
                  value={selected}
                  onChange={(val) => setSelected(val as string)}
                />
              </Flex>
            </div>
            <div className="divisions-actions">
              <Dropdown
                menu={{ items: dropdownItems, onClick: handleMenuClick }}
                trigger={["click"]}
              >
                <Button type="primary">
                  Acciones <DownOutlined />
                </Button>
              </Dropdown>

              <Search
                placeholder="Buscar organizaciones..."
                allowClear
                onSearch={handleSearch}
                className="divisions-search"
                prefix={<SearchOutlined />}
              />
            </div>
          </Space>

          <TableComponent />
        </div>
      ) : (
        <div className="divisions-tree">
          <div>
            <Flex gap="small" align="flex-start" vertical>
              <Segmented
                options={options}
                value={selected}
                onChange={(val) => setSelected(val as string)}
              />
            </Flex>
          </div>
          <h2>Vista de Árbol</h2>
          <p>Aquí se mostraría la vista de árbol de las organizaciones.</p>
        </div>
      )}
    </>
  );
};
