import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { HelpFaqComponent } from './help-faq/help-faq.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent, ProfileDialog } from './profile/profile.component';
import { CartComponent, CartDialog } from './cart/cart.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'



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
    ProfileDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [
    CartDialog,
    ProfileDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
