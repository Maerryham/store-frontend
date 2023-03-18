import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    name: '',
    address: '',
    cardNumber: 0
  };
  constructor() { }
}
