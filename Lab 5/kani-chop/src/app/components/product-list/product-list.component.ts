import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductItemComponent
  ],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();

  removeEvent = output<number>();
  handleRemoveProduct(id: number) {
    this.removeEvent.emit(id);
  }
}
