import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';
import productsData from './products.json';
import categoriesData from './categories.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected products: Product[] = [];
  protected categories: Category[] = [];
  constructor() {
    this.products = JSON.parse(JSON.stringify(productsData));
    this.categories = JSON.parse(JSON.stringify(categoriesData));
  }

  getProducts(): Product[] {
    return this.products;
  }
  getCategories(): Category[] {
    return this.categories;
  }

  filterProducts(categoryName: string): Product[] {
    if (categoryName === 'all') return this.products;
    const categoryId = this.categories.find(category => category.name === categoryName)?.id;
    console.log(categoryName, this.categories, this.products.filter(product => product.categoryId === categoryId), this.categories.find(category => category.name === categoryName))
    return this.products.filter(product => product.categoryId === categoryId);
  }

  removeProduct(id: number) {
    const idx = this.products.findIndex(product => product.id === id)
    if (idx === -1) return;
    this.products.splice(idx, 1);
  }
}
