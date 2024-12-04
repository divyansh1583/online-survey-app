import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule, MatDividerModule,DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter(), DatePipe],
})
export class HomeComponent {
  datePipe = inject(DatePipe);
  //working
  currentDate = new Date().toISOString().slice(0,24);
  localDate = this.datePipe.transform(this.currentDate, 'yyyy-mm-ddThh:mm');
  
  //experiment
  ogCurrentDate = new Date().toISOString().slice(0,16);
  convertedToISO=new Date(this.ogCurrentDate+'Z').toISOString();
  

}
