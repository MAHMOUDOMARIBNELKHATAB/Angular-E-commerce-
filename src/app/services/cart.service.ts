import { Injectable } from '@angular/core';
import { SelectedCard } from '../interface/selected-card';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsInCart: SelectedCard[] = [];
  public count: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  constructor() {}
}
