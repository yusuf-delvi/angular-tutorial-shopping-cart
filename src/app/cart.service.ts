import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addToCart(item: Product) {
    this.items.push(item);
  }

  getCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private httpClient: HttpClient) {}
}
