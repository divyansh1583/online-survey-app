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

  todoListResource = resource({
    loader: async ({ abortSignal }): Promise<any> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, { signal: abortSignal });
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      return response.json(); // Parse the JSON response
    }
  });
  
}
