import { MenuItem } from "../models/MenuItem";

export const MenuItemsData: MenuItem[] = [
    {
      id: 1,
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/platform/admin/home'
    },
    {
      id: 2,
      label: 'Experiment',
      icon: 'people',
      children: [
        {
          id: 21,
          label: 'Signal',
          icon: 'wifi',
          route: '/platform/admin/signal'
        },
        {
          id: 24,
          label: 'Linked Signals',
          icon: 'sensors',
          route: '/platform/admin/linked-signals'
        },
        {
          id: 22,
          label: 'Hydration',
          icon: 'fire_hydrant',
          route: '/platform/admin/hydration'
        },
        {
          id: 23,
          label: 'DateTimePicker',
          icon: 'event',
          route: '/platform/admin/date-time-picker'
        },
      ]
    },
    // {
    //   id: 3,
    //   label: 'Products',
    //   icon: 'inventory_2',
    //   children: [
    //     {
    //       id: 31,
    //       label: 'All Products',
    //       icon: 'grid_view',
    //       route: '/products/all'
    //     },
    //     {
    //       id: 32,
    //       label: 'Categories',
    //       icon: 'category',
    //       route: '/products/categories'
    //     },
    //     {
    //       id: 33,
    //       label: 'Inventory',
    //       icon: 'inventory',
    //       route: '/products/inventory'
    //     }
    //   ]
    // },
    // {
    //   id: 4,
    //   label: 'Reports',
    //   icon: 'bar_chart',
    //   route: '/reports'
    // },
    // {
    //   id: 5,
    //   label: 'Settings',
    //   icon: 'settings',
    //   route: '/settings'
    // }
  ];