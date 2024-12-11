import { NgClass } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dehydrated-button',
  imports: [],
  templateUrl: './dehydrated-button.component.html',
  styleUrl: './dehydrated-button.component.scss'
})
export class DehydratedButtonComponent implements OnInit,AfterViewInit{
  buttonColor: string = '';

  ngOnInit(): void {
    this.buttonColor = 'red';
    console.log("Button component Rendered on server");
  }
  ngAfterViewInit(): void {
    // Change color after hydration (when Angular runs in the browser)
    setTimeout(() => {
      this.buttonColor = 'blue';
      console.log("Button component hydrated on the client.");
    });
  }
}
