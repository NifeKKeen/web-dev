import { Component } from '@angular/core';
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
  protected productService = new ProductsService();
}
