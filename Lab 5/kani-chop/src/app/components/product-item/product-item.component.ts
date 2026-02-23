import { Component, input } from '@angular/core';
import { Product } from '../../models/product';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-product-item',
  imports: [
    StarsComponent
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  protected readonly encodeURIComponent = encodeURIComponent;
}
