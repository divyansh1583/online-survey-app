import { Component, computed, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  imports: [FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  editMode: WritableSignal<boolean> = signal(false);
  timesotTitle: Signal<"Readonly Time Slot" | "Enter timeSlot"> = computed(() => {
    return this.editMode() ? "Readonly Time Slot" : "Enter timeSlot";
  });
  speacialNotes=linkedSignal(()=>{
    if(this.editMode()){
      return 'Edit mode';
    }
    return 'Add mode';
  });
}
