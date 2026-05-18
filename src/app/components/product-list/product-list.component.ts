import { Component } from '@angular/core';

interface ProductData {
  id: number,
  name: string,
  price: number,
  category: string,
  inStock: boolean
}

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: ProductData[] = [
    { id: 1, name: 'Laptop', price: 50000, category: 'Electronic', inStock: true },
    { id: 2, name: 'Mouse', price: 500, category: 'Electronic', inStock: true },
    { id: 3, name: 'Keyboard', price: 700, category: 'Electronic', inStock: true },
    { id: 4, name: 'Monitor', price: 10000, category: 'Electronic', inStock: false },
  ];
}
