export interface Link {
  linkName: string;
  linkPath: string;
}

export const UNAUTHENTICATED_NAV_LINKS: Link[] = [
  { linkName: 'Pricing', linkPath: '/pricing' },
  { linkName: 'Documentation', linkPath: '/documentation' },
  { linkName: 'API Status', linkPath: '/api-status' },
  { linkName: 'Login', linkPath: '/auth' },
];

