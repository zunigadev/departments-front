export const ROUTES = {
  DASHBOARD: '/dashboard',
  ORGANIZATION: '/organization', 
  MODELS: '/models',
  TRACKING: '/tracking',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];