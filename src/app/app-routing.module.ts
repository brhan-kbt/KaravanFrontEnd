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
import { BranchlistComponent } from './setup/branchlist/branchlist.component';
import { AddBranchComponent } from './setup/add-branch/add-branch.component';
import { EditProductComponent } from './setup/edit-product/edit-product.component';
import { EditGalleryComponent } from './setup/edit-gallery/edit-gallery.component';
import { EditBranchComponent } from './setup/edit-branch/edit-branch.component';
import { CakePageComponent } from './setup/cake-page/cake-page.component';
import { CoffeePageComponent } from './setup/coffee-page/coffee-page.component';
import { FoodPageComponent } from './setup/food-page/food-page.component';
import { EditUsersComponent } from './setup/edit-users/edit-users.component';
import { CustomerDashboardComponent } from './setup/customer-dashboard/customer-dashboard.component';
import { CategoryMgtComponent } from './setup/category-mgt/category-mgt.component';
import { AddCategoryComponent } from './setup/add-category/add-category.component';
import { AddSubCategoryComponent } from './setup/add-sub-category/add-sub-category.component';
import { MyProfileComponent } from './setup/my-profile/my-profile.component';
import { EditCategoryComponent } from './setup/edit-category/edit-category.component';
import { EditSubCategoryComponent } from './setup/edit-sub-category/edit-sub-category.component';
import { SubcategoryMgtComponent } from './setup/subcategory-mgt/subcategory-mgt.component';
import { OrderDetailListComponent } from './setup/order-detail-list/order-detail-list.component';
import { CustomerOrderDetailsComponent } from './setup/customer-order-details/customer-order-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cake', component: CakePageComponent },
  { path: 'coffee', component: CoffeePageComponent },
  { path: 'food', component: FoodPageComponent },
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
  { path: 'edit-user/:id', component: EditUsersComponent },
  { path: 'my-dashboard', component: CustomerDashboardComponent },
  { path: 'my-dashboard', component: CustomerDashboardComponent },
  { path: 'my-dashboard/order-detail/:id', component: CustomerOrderDetailsComponent },
  { path: 'my-profile', component: MyProfileComponent },


  { path: 'category-mgt', component: CategoryMgtComponent },
  { path: 'category/:id', component: SubcategoryMgtComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-category/:id', component: EditCategoryComponent },
  { path: 'add-subcategory', component: AddSubCategoryComponent },
  { path: 'edit-subcategory/:id', component: EditSubCategoryComponent },

  { path: 'order-detail-list/:id', component: OrderDetailListComponent },



  // Delete
  // { path: 'delete-category/:id', component: CategoryMgtComponent },


  { path: 'add-user', component: AdduserComponent },
  { path: 'order-mgt', component: OrderlistComponent },
  { path: 'product-mgt', component: ProductlistComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'reward-mgt', component: RewardlistComponent },
  { path: 'gallery-mgt', component: GallerylistComponent },
  { path: 'add-galley', component: AddGalleryComponent },
  { path: 'edit-gallery/:id', component: EditGalleryComponent },
  { path: 'branch-mgt', component: BranchlistComponent },
  { path: 'add-branch', component: AddBranchComponent },
  { path: 'edit-branch/:id', component: EditBranchComponent },

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
