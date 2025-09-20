
import type { ReactNode } from 'react';

export interface NavbarRoute {
  key: string;
  path: string;
  label: string;
  icon: ReactNode;
}

export interface MenuRoute extends NavbarRoute {
  children?: MenuRoute[];
  hideInMenu?: boolean;
}