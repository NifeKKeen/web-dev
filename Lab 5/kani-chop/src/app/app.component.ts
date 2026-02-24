import { Component, inject, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [
    ProductListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected productService = inject(ProductsService);

  protected currentCategory = signal<string>('all');

  handleCategoryClick(category: string) {
    if (category === this.currentCategory()) {
      this.currentCategory.set('all');
      return;
    }
    this.currentCategory.set(category);
  }
}
