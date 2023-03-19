import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  product: Product | null;
  quantity: number = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService){
    
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: ''
  }
  }

  getProductItem(id: number){
    this.product = this.productService.getProductById(id);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getProductItem(+id);
    })
  }

  addToCart(quantity: number): void {
    this.cartService.addToCart(quantity, this.product)
  }
}
