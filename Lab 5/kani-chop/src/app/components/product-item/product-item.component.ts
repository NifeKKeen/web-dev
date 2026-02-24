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
  standalone: true,
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  protected readonly encodeURIComponent = encodeURIComponent;
  protected removeEvent = output<number>()

  async handleRemoveProduct() {
    if (await this.confirmRemove()) {
      this.removeEvent.emit(this.product().id);
    }
  }

  async confirmRemove() {
    let res = confirm(`Are you sure you want to remove ${this.product().name}?`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return res;
  }

  handleLikeProduct() {
    this.product().likes += 1;
  }
}
