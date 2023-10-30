import { Component } from '@angular/core';
import products from './../../../assets/products.json';
import{ Cards } from '../interface/cards';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  AllCards : Array<Cards> = products;
  details: any;


  constructor(private activatedRoute: ActivatedRoute){
      
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.details = this.AllCards.find(
      (card) => card.id === this.activatedRoute.snapshot.params['id']
    )
    console.log( this.details = this.AllCards.find(
      (card) => card.id.toString() === this.activatedRoute.snapshot.params['id']
    ))
    
  }

}
