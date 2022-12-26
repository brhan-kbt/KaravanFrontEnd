import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { HomeComponent } from './setup/home/home.component';
import { ProductComponent } from './setup/product/product.component';
import { OrderComponent } from './setup/order/order.component';
import { GalleryComponent } from './setup/gallery/gallery.component';
import { AboutComponent } from './setup/about/about.component';
import { OrderDetailsComponent } from './setup/order-details/order-details.component';
import { CartComponent } from './setup/cart/cart.component';
import { CheckoutComponent } from './setup/checkout/checkout.component';
import { RegisterComponent } from './setup/register/register.component';
import { UserlistComponent } from './setup/userlist/userlist.component';
import { AdduserComponent } from './setup/adduser/adduser.component';
import { OrderlistComponent } from './setup/orderlist/orderlist.component';
import { ProductlistComponent } from './setup/productlist/productlist.component';
import { AddProductComponent } from './setup/add-product/add-product.component';
import { RewardlistComponent } from './setup/rewardlist/rewardlist.component';
import { GallerylistComponent } from './setup/gallerylist/gallerylist.component';
import { AddGalleryComponent } from './setup/add-gallery/add-gallery.component';
import { LoginComponent } from './setup/login/login.component';
import { MenulistComponent } from './setup/menulist/menulist.component';
import { AddMenuComponent } from './setup/add-menu/add-menu.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MenuComponent } from './setup/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: HomeComponent },
  { path: 'whykaravan', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'menu-mgt', component: MenulistComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'user-mgt', component: UserlistComponent },
  { path: 'add-user', component: AdduserComponent },
  { path: 'order-mgt', component: OrderlistComponent },
  { path: 'product-mgt', component: ProductlistComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'reward-mgt', component: RewardlistComponent },
  { path: 'gallery-mgt', component: GallerylistComponent },
  { path: 'add-galley', component: AddGalleryComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
