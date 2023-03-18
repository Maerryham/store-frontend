import { Component } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  cart: Cart[] = [];
  result: { items: Cart[], total: number } = { items: [], total:0}
  user: User = { name: '', address: '', cardNumber: 0 };

  constructor(private cartService: CartService, private userService: UserService){}

  ngOnInit(): void {
    this.getCartDetails()
    this.getUser()
  }

  getCartDetails(): void {
    this.result =  this.cartService.getCartItems()
  }

  getUser(): void {
    this.user = this.userService.getUser()
  }

  
}
