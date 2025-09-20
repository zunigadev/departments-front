import { LogoutOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

export const userDropdownMenuItems: MenuProps['items'] = [
    {
        key: 'profile',
        label: 'Mi Perfil',
        icon: <ProfileOutlined />,
    },
    {
        key: 'settings',
        label: 'Configuración',
        icon: <SettingOutlined />,
    },
    {
        type: 'divider',
    },
    {
        key: 'logout',
        label: 'Cerrar Sesión',
        icon: <LogoutOutlined />,
        danger: true,
    },
];

export const navbarMenuItems: MenuProps['items'] = [
    { key: "1", label: "Dashboard" },
    { key: "2", label: "Organización" },
    { key: "3", label: "Modelos" },
    { key: "4", label: "Seguimiento" },
];

export const MENU_KEYS = {
    PROFILE: 'profile',
    SETTINGS: 'settings',
    LOGOUT: 'logout',
} as const;