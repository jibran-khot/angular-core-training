import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
})
export class OrderSummaryComponent {
  productInfo: [ProductID: number, ProductName: string, Price: number, inStock: boolean]
    = [101, "Laptop", 55000, true]
  orderStatus: [OrderID: number, CustomerName: string, PaymentCompleted: boolean, DeliveryStatus: string]
    = [5001, "Jibran", true, 'Shipped']
}
