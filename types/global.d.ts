export type RouteType = {
  path: string;
  component: React.ComponentType;
  metadata?: Options;
};

type Options = {
  hasSidebredirectOnNoAuthToar?: string;
  redirectTo?: string;
  isAuth: boolean;
  hasSidebar?: boolean;
};
