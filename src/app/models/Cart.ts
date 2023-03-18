import { Product } from './Product'
export class Cart extends Product{
    quantity: number;

    constructor(){
        super();
        this.quantity = 1;
    }
}