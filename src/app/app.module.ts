import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AddProductComponent } from './components/addproduct/addproduct.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpFaqComponent } from './components/help-faq/help-faq.component';
import { ProfileComponent} from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'
import { UserService } from './services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { ShopService } from './services/shop.service';
import { CommonModule } from '@angular/common';
import { UpdateShopComponent } from './components/updateshop/updateshop.component';
import { AddPaymentComponent } from './components/addpayment/addpayment.component';
import { UpdatePaymentComponent } from './components/updatepayment/updatepayment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AddProductComponent,
    UpdateShopComponent,
    ContactComponent,
    HelpFaqComponent,
    ProfileComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    AddPaymentComponent,
    UpdatePaymentComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [
    HttpClient,
    UserService,
    AuthGuard,
    ShopService
  ],
  entryComponents: [
    AddPaymentComponent,
    UpdatePaymentComponent,
    AddProductComponent,
    UpdateShopComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }