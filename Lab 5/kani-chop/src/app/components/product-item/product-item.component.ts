import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { StarsComponent } from '../stars/stars.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [
    StarsComponent,
    NgOptimizedImage
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  protected readonly encodeURIComponent = encodeURIComponent;
  protected removeEvent = output<number>()

  handleRemoveProduct() {
    this.removeEvent.emit(this.product().id);
  }

  handleLikeProduct() {
    this.product().likes += 1;
  }
}
