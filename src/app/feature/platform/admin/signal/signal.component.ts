import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  signal1 = signal("signal1");
  signal2 = signal("signal2");
  mainSignal = signal("No value changed!");

  onSignal1Change() {
    const newValue = `signal1 changed at ${new Date().toLocaleTimeString()}`;
    this.signal1.set(newValue);
    this.mainSignal.set(this.signal1()); // Update mainSignal with the new value of signal1
  }
  items = signal([{ price: 50, quantity: 2 }, { price: 30, quantity: 1 }]);
  
  onSignal2Change() {
    const newValue = `signal2 changed at ${new Date().toLocaleTimeString()}`;
    this.signal2.set(newValue);
    this.mainSignal.set(this.signal2()); // Update mainSignal with the new value of signal2
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  } 
}
