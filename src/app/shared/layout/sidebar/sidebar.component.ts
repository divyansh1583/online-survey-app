import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';

interface MenuItem {
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
  toggleSidebar() {
    throw new Error('Method not implemented.');
  }
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'Users',
      icon: 'people',
      children: [
        {
          label: 'User List',
          icon: 'list',
          route: '/users/list'
        },
        {
          label: 'User Groups',
          icon: 'group_work',
          route: '/users/groups'
        }
      ]
    },
    {
      label: 'Products',
      icon: 'inventory_2',
      children: [
        {
          label: 'All Products',
          icon: 'grid_view',
          route: '/products/all'
        },
        {
          label: 'Categories',
          icon: 'category',
          route: '/products/categories'
        },
        {
          label: 'Inventory',
          icon: 'inventory',
          route: '/products/inventory'
        }
      ]
    },
    {
      label: 'Reports',
      icon: 'bar_chart',
      route: '/reports'
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    }
  ];
}
