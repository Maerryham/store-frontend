import { Input } from '@angular/core'
import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor() {

    this.product = {
        id: 1,
        name: '',
        price: 1,
        url: '',
        description: ''
    }
  }
  ngOnInit(): void {

  }
}
