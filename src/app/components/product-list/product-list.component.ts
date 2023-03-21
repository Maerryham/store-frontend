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
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }
  ngOnInit(): void {
    
  }
}
