import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import productsData from './products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected products: Product[] = [];
  constructor() {
    this.products = JSON.parse(JSON.stringify(productsData));
  }

  getProducts(): Product[] {
    return this.products;
  }
}
