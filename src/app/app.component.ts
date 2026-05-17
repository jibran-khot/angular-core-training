import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [ProductDetailsComponent]
})
export class AppComponent {

}