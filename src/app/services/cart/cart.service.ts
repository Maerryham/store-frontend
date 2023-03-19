import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { Cart } from '../../models/Cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart[] = [];
  total: number = 0;
  constructor() { }

  getCartItems(): {items: Cart[], total: number} {
    return { items: this.items, total: this.calculateTotal(this.items)};
  } 

  addToCart(quantity: number, product: Product | null){
    if(product == null || quantity == null) return { items: this.items, total: this.total};
    if(quantity === 0) {
      return this.removeProductFromCart(product)
    }
    const productInCart = this.items.find(item => item.id === product.id)
    if (productInCart) {
      productInCart.quantity = quantity
    } else {
      this.items.push({...product, quantity })
    }
    return {items: this.items, total: this.calculateTotal(this.items)};
  }

  removeProductFromCart(product: Product){
    alert("Removed from Cart!")
    const index = this.items.findIndex(item => item.id === product.id)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
    return {items: this.items, total: this.calculateTotal(this.items)};
  }

  calculateTotal(items: Cart[]): number{
    if(items.length === 0) return 0;
    this.total = items.map(item => item.quantity * item.price).reduce((sum, item) => sum + item);
    return +this.total.toFixed(2); 
  }
}
