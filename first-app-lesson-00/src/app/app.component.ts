import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <button class="btn btn-secondary" (click)="decreaseCounter()">-</button>
      <div class="counter">{{ counter }}</div>
      <button class="btn btn-secondary" (click)="increaseCounter()">+</button>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #222;
    }

    .btn {
      font-size: 2rem;
      border-radius: 50%;
      padding: 1rem;
      background-color: orange;
      color: white;
      margin: 0 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    .btn:hover {
      background-color: #FFA500;
    }

    .counter {
      font-size: 4rem;
      color: white;
      margin: 0 2rem;
    }
  `]
})
export class AppComponent {
  counter = 0;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
