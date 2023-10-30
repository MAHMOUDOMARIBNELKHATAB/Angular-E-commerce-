import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPISService {

  constructor(private http : HttpClient) { }

    getProductList () {
return this.http.get('https://dummyjson.com/products')
    }
}
