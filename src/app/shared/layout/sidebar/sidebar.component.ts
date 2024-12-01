import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';

interface MenuItem {
  id:number;
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems: MenuItem[] = [
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
}
