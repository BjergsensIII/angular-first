import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="https://via.placeholder.com/500x500.png?text=Product+Image" class="img-fluid" alt="Product Image">
        </div>
        <div class="col-md-6">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <h2>{{ product.price }} €</h2>
          <button class="btn btn-primary" (click)="addToCart()">Add to Cart</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 2rem;
    }

    img {
      max-height: 500px;
      margin-bottom: 2rem;
    }
  `]
})
export class AppComponent {
  product = {
    title: 'Cap',
    description: 'This is a simple cap',
    price: 19.99
  };

  addToCart() {
    // Implement your add to cart functionality here
    console.log('Added to cart');
  }
}
