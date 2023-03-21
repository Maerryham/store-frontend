import { Input, Output, EventEmitter } from '@angular/core'
import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  cart: Cart;
  quantity: number = 0;
  @Input() product: Product;
  // @Output()
  // Carts: EventEmitter<any> = new EventEmitter

  constructor(private cartService: CartService) {

    this.product = {
        id: 1,
        name: '',
        price: 1,
        url: '',
        description: ''
    }
    this.cart = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 1,
  }
  }
  ngOnInit(): void {

  }
  addToCart(): void {
    if(this.quantity === 0) {
      alert('Invalid quantity 0');
     return;
    }
    this.cartService.addToCart(+this.quantity, this.product)
    alert('Added to Cart!')
  }

  onSelectEvent(event: string): void {
    console.log('event', event)
    this.quantity = parseInt(event);
  }
}
