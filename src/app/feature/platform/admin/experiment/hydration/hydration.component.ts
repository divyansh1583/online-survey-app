import { Component, OnInit } from '@angular/core';
import { DehydratedButtonComponent } from './dehydrated-button/dehydrated-button.component';
@Component({
  selector: 'app-hydration',
  imports: [DehydratedButtonComponent],
  templateUrl: './hydration.component.html',
  styleUrl: './hydration.component.scss'
})
export class HydrationComponent implements OnInit {
  ngOnInit(): void {

  }
}
