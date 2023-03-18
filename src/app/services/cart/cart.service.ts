import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { Cart } from '../../models/Cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart[] = [];
  constructor() { }

  getItems(): Cart[] {
    return this.items;
  } 

  addToCart(quantity: number, product: Product | null){
    if(!product || !quantity) return;
    const productInCart = this.items.find(item => item.id === product.id)
    if (productInCart) {
      productInCart.quantity = quantity
    } else {
      this.items.push({...product, quantity })
    }
    return this.items;
  }
}
