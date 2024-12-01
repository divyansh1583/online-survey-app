import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/layout/sidebar/sidebar.component';
import { HeaderComponent } from "../../shared/layout/header/header.component";

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent {
  isSidebarOpened=true;
  onSidebarToggle(event:boolean){
    this.isSidebarOpened=event;
  }
}


