import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-select-quantity',
  templateUrl: './select-quantity.component.html',
  styleUrls: ['./select-quantity.component.css']
})
export class SelectQuantityComponent {
  quantity: number = 0;
  @Output() selected = new EventEmitter<string>();


  onSelectQuantity() {
    this.selected.emit(''+this.quantity);
  }
}
