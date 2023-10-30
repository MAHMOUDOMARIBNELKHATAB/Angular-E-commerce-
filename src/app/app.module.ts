import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductAppComponent } from './product-app/product-app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/CartComponent';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductAppComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ProductdetailsComponent,
    HeaderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
