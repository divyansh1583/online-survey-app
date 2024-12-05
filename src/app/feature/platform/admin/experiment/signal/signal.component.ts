import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  editMode = signal(false);
  timesotTitle = computed(() => {
    return this.editMode() ? "Readonly Time Slot" : "Enter timeSlot";
  });
}
