import { MenuItem } from "../models/MenuItem";

export const MenuItemsData: MenuItem[] = [
    {
      id: 1,
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      id: 2,
      label: 'Users',
      icon: 'people',
      children: [
        {
          id: 21,
          label: 'User List',
          icon: 'list',
          route: '/users/list'
        },
        {
          id: 22,
          label: 'User Groups',
          icon: 'group_work',
          route: '/users/groups'
        }
      ]
    },
    {
      id: 3,
      label: 'Products',
      icon: 'inventory_2',
      children: [
        {
          id: 31,
          label: 'All Products',
          icon: 'grid_view',
          route: '/products/all'
        },
        {
          id: 32,
          label: 'Categories',
          icon: 'category',
          route: '/products/categories'
        },
        {
          id: 33,
          label: 'Inventory',
          icon: 'inventory',
          route: '/products/inventory'
        }
      ]
    },
    {
      id: 4,
      label: 'Reports',
      icon: 'bar_chart',
      route: '/reports'
    },
    {
      id: 5,
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    }
  ];