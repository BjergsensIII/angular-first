import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // Add this line
  template: `
    <div>
      <h1>Counter App</h1>
      <p>Value: {{ value }}</p>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  value = 0;

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }
}


