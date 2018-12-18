import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpFaqComponent } from './components/help-faq/help-faq.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { User } from './models/user';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpFaqComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard], data: {isAdmin: [true]} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
