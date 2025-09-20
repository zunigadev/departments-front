import React from 'react';
import { Navigate } from 'react-router-dom';
import { 
  DashboardOutlined, 
  TeamOutlined, 
  DatabaseOutlined, 
  LineChartOutlined 
} from "@ant-design/icons";
import { Card, Typography } from 'antd';
import type { RouteObject } from 'react-router-dom';
import type { MenuProps } from 'antd';

const { Title } = Typography;

export const ROUTES = {
  DASHBOARD: '/dashboard',
  ORGANIZATION: '/organization',
  MODELS: '/models', 
  TRACKING: '/tracking',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;

const PlaceholderPage = ({ title }: { title: string }) => (
  <div style={{ padding: '0 24px' }}>
    <Title level={2}>{title}</Title>
    <Card>
      <p>Página {title.toLowerCase()} en construcción...</p>
    </Card>
  </div>
);

const OrganizationPage = React.lazy(() => import('../../features/organization/pages/OrganizationPage'));

export const appRoutes: RouteObject[] = [
  { path: '/', element: <Navigate to={ROUTES.DASHBOARD} replace /> },
  { path: ROUTES.DASHBOARD, element: <PlaceholderPage title="Dashboard" /> },
  { path: ROUTES.ORGANIZATION, element: <OrganizationPage /> },
  { path: ROUTES.MODELS, element: <PlaceholderPage title="Modelos" /> },
  { path: ROUTES.TRACKING, element: <PlaceholderPage title="Seguimiento" /> },
  { path: ROUTES.PROFILE, element: <PlaceholderPage title="Mi Perfil" /> },
  { path: ROUTES.SETTINGS, element: <PlaceholderPage title="Configuración" /> },
];

export const navbarItems: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    key: 'organization', 
    label: 'Organización',
    icon: <TeamOutlined />,
  },
  {
    key: 'models',
    label: 'Modelos',
    icon: <DatabaseOutlined />,
  },
  {
    key: 'tracking',
    label: 'Seguimiento',
    icon: <LineChartOutlined />,
  },
];

export const getRouteByKey = (key: string): string => {
  const routeMap: Record<string, string> = {
    dashboard: ROUTES.DASHBOARD,
    organization: ROUTES.ORGANIZATION,
    models: ROUTES.MODELS,
    tracking: ROUTES.TRACKING,
  };
  
  const route = routeMap[key];
  console.log('getRouteByKey:', key, '->', route); 
  
  return route || ROUTES.DASHBOARD; 
};