// Tipo para los datos de organización
export interface OrganizationData {
  key: string;
  division: string;
  superiorDivision: string;
  members: number;
  level: string;
  subdivisions: number;
  ambassadors: string;
}

// Datos de ejemplo alineados a las columnas
export const mockData: OrganizationData[] = [
  {
    key: "1",
    division: "Marketing",
    superiorDivision: "Dirección General",
    members: 25,
    level: "Nivel 2",
    subdivisions: 3,
    ambassadors: "Ana Torres",
  },
  {
    key: "2",
    division: "Ventas",
    superiorDivision: "Dirección General",
    members: 40,
    level: "Nivel 2",
    subdivisions: 5,
    ambassadors: "Carlos López",
  },
  {
    key: "3",
    division: "TI",
    superiorDivision: "Operaciones",
    members: 18,
    level: "Nivel 3",
    subdivisions: 2,
    ambassadors: "María Fernández",
  },
];
