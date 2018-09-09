import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'Actions',
    group: true,
  },
  {
    title: 'Securities',
    icon: 'nb-locked',
    link: '/securities/create',
    children: [
      {
        title: 'Create Security',
        link: '/securities/create',
      },
      {
        title: 'View All Securities',
        link: '/securities/view',
      }
    ],
  },
  {
    title: 'Orders',
    icon: 'nb-compose',
    children: [
      {
        title: 'Create Order',
        link: '/orders/create',
      },
      {
        title: 'View Your Orders',
        link: '/orders/view',
      },
      {
        title: 'Find Orders',
        link: '/orders/find',
      },
    ],
  },
  {
    title: 'Holdings',
    icon: 'nb-compose',
    children: [
      {
        title: 'View Holdings',
        link: '/holdings/view',
      },
    ],
  },
];
