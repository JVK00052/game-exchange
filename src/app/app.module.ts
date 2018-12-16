import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpFaqComponent } from './components/help-faq/help-faq.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent, CartDialog } from './components/cart/cart.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    HelpFaqComponent,
    AuthComponent,
    ProfileComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    CartDialog,
    CCDialog,
    AccountDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    UserService,
    AuthService
  ],
  entryComponents: [
    CartDialog,
    CCDialog,
    AccountDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
