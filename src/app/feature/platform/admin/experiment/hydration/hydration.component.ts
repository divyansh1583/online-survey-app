import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-hydration',
  imports: [NgClass],
  templateUrl: './hydration.component.html',
  styleUrl: './hydration.component.scss'
})
export class HydrationComponent implements OnInit {
  isButtonActive: boolean = false;

  ngOnInit(): void {
    this.isButtonActive=true;
  }
}
