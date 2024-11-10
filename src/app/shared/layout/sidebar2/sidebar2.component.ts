
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-sidebar2',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './sidebar2.component.html',
  styleUrl: './sidebar2.component.scss',
  animations: [
    trigger('submenuAnimation', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('hidden <=> visible', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class Sidebar2Component {
  menuItems: MenuItem[] = MENU_ITEMS;
  isExpanded = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSubmenu(item: MenuItem): void {
    item.expanded = !item.expanded;
  }

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}

export interface MenuItem {
  id: number;
  name: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

// mock-menu-data.ts
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard'
  },
  {
    id: 2,
    name: 'User Management',
    icon: 'people',
    children: [
      {
        id: 21,
        name: 'Users List',
        icon: 'list',
        route: '/users/list'
      },
      {
        id: 22,
        name: 'User Groups',
        icon: 'group',
        route: '/users/groups'
      }
    ]
  },
  {
    id: 3,
    name: 'Reports',
    icon: 'assessment',
    children: [
      {
        id: 31,
        name: 'Sales Report',
        icon: 'trending_up',
        route: '/reports/sales'
      },
      {
        id: 32,
        name: 'Analytics',
        icon: 'analytics',
        route: '/reports/analytics'
      }
    ]
  },
  {
    id: 4,
    name: 'Settings',
    icon: 'settings',
    children: [
      {
        id: 41,
        name: 'Profile',
        icon: 'person',
        route: '/settings/profile'
      },
      {
        id: 42,
        name: 'Preferences',
        icon: 'tune',
        route: '/settings/preferences'
      }
    ]
  }
];