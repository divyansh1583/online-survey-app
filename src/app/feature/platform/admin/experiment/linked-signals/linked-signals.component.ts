import { Component, computed, linkedSignal, resource, Signal, signal } from '@angular/core';
import { createSignal } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signals',
  imports: [FormsModule],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss'
})
export class LinkedSignalsComponent {
  showSMSTemplates = signal(false);
  surveyTemplate: Signal<string[]> = this.getSurveyTemplates();

  getSurveyTemplates() {
    return computed(() => {
      if (this.showSMSTemplates()) {
        //return ["Send Survey 1", "Send Survey 2, Send Survey 3", "SMS Template 1", "SMS Template 2"];
        return ["SMS Template 1", "SMS Template 2", "SMS Template 3"];
      }
      return ["Send Survey 1", "Send Survey 2", "Send Survey 3"];
    }
    );
  }
  /*Difference between computes and linkedSignal you can t change computed signal it only reads
  --------> selectedTemplate=computed(()=>this.surveyTemplate()[0]);
  put this in the class and observe that the value of select will not change.
  */
  selectedTemplate = linkedSignal(() => this.surveyTemplate()[0]);

  /*-------------------------------------------------------------------------------------------------- */
  /*Resource - Async activity withs signals*/

  todosList=this.getTodoList();
  getTodoList(){

  }
  // userResource = resource({
  //   // Define a reactive request computation.
  //   // The request value recomputes whenever any read signals change.
  //   request: () => ({id: userId()}),
  //   // Define an async loader that retrieves data.
  //   // The resource calls this function every time the `request` value changes.
  //   loader: ({request}) => fetchUser(request),
  // });
}
