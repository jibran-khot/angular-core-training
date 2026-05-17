import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {

  productName: string = 'Toothbrush';
  productPrice: number = 200;
  isInStock: boolean = true;
  discountPercentage: number = 10;
  manufacturerEmail: null = null;
  lastPurchasedDate: undefined = undefined;


}
