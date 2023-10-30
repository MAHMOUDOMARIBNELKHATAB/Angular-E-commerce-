import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAppComponent } from './product-app/product-app.component';
import { ProductdetailsComponent} from './productdetails/productdetails.component';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { CartComponent } from './cart/CartComponent';
import {  NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {
    path : "",
    component : ProductAppComponent ,
    
  },
  {
    path : "Product-details/:id",
    component : ProductdetailsComponent ,
    
  },
  {
    path : "Login",
    component : LoginComponent ,
    
  },
  {
    path : "Signup",
    component : SignupComponent ,
    
  },
  {
    path : "Login/Signup",
    component : SignupComponent ,
    
  },
  {
    path : "Cart",
    component :  CartComponent ,
  },
  {
    path : "**",
    component :  NotfoundComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
