import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CounterService } from '../services/CounterService';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  constructor(public cartService: CartService, private counterService: CounterService) { }
  removeProduct(index: number) {
    this.cartService.productsInCart.splice(index, 1);
    this.cartService.count.next(this.cartService.productsInCart.length);
  }

  private _counter = 0;
  public get counter() {
    return this._counter;
  }
  public set counter(value) {
    this._counter = value;
  }

  ngOnInit() {
    this.counterService.getCounter().subscribe((data: any) => this.counter = data);
  }

  increaseCounter(counter: number) {
    

    counter = counter + 1;
    console.log(counter);
    
    
  }

  decreaseCounter(counter: number) {
    counter--;
  }
}
