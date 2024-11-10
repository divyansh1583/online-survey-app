import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '../../shared/layout/sidebar/sidebar.component';
import { Sidebar2Component } from "../../shared/layout/sidebar2/sidebar2.component";

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [
    CommonModule,
    Sidebar2Component
],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent {

}
