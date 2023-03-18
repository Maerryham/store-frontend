import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../models/Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProducts()
  }
  ngOnInit(): void {
    
  }
}
