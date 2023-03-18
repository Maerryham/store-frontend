import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService, private productService: ProductService){}
  products: Cart[] = []
  product: Product | null = null
  total: number = 0
  result: {items: Cart[], total: number} = {items: [], total:0 }

  ngOnInit(): void {
    this.result = this.cartService.getCartItems()
    this.total = this.result.total
    this.products = this.result.items
  }

  updateCart(quantity: number, id: number): void {
    this.product = this.productService.getProductById(id)
    this.result = this.cartService.addToCart(quantity, this.product)
    this.total = this.result.total
    this.products = this.result.items
  }
}
