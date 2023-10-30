import { Component } from '@angular/core';
import products from './../../../assets/products.json';
import { Cards } from '../interface/cards';
import { Router } from '@angular/router';
import { ProductsAPISService } from '../services/products-apis.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-app',
  templateUrl: './product-app.component.html',
  styleUrls: ['./product-app.component.css'],
})
export class ProductAppComponent {
  AllCards!: Array<Cards>;

  constructor(
    private Products: ProductsAPISService,
    private     cartService: CartService
  ) {}
  ngOnInit() {
    this.Products.getProductList().subscribe(
      (data: any) => (this.AllCards = data.products)
    );
  }

  redirectToDetails(id: any) {
    // this.router.navigate(['Product-details',id])
  }

  addToCard(card: Cards) {
    var duplicateCards = this.cartService.productsInCart.filter(
      (c) => c.card.id === card.id
    );
    if (duplicateCards.length > 0) {
      duplicateCards[0].quantity++;
    } else {
      this.cartService.productsInCart.push({
        card: card,
        quantity: 1,
      });
    }

    this.cartService.count.next(this.cartService.productsInCart.length);
  }
}
