import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}   from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { HomeComponent } from './setup/home/home.component';
import { ProductComponent } from './setup/product/product.component';
import { OrderComponent } from './setup/order/order.component';
import { GalleryComponent } from './setup/gallery/gallery.component';
import { AboutComponent } from './setup/about/about.component';
import { OrderDetailsComponent } from './setup/order-details/order-details.component';
import { CartComponent } from './setup/cart/cart.component';
import { CheckoutComponent } from './setup/checkout/checkout.component';
import { RegisterComponent } from './setup/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SfooterComponent } from './shared/sfooter/sfooter.component';
import { UserlistComponent } from './setup/userlist/userlist.component';
import { OrderlistComponent } from './setup/orderlist/orderlist.component';
import { ProductlistComponent } from './setup/productlist/productlist.component';
import { AdduserComponent } from './setup/adduser/adduser.component';
import { AddProductComponent } from './setup/add-product/add-product.component';
import { RewardlistComponent } from './setup/rewardlist/rewardlist.component';
import { GallerylistComponent } from './setup/gallerylist/gallerylist.component';
import { AddGalleryComponent } from './setup/add-gallery/add-gallery.component';
import { DashboardNavbarComponent } from './shared/dashboard-navbar/dashboard-navbar.component';
import { LoginComponent } from './setup/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MenulistComponent } from './setup/menulist/menulist.component';
import { AddMenuComponent } from './setup/add-menu/add-menu.component'
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuComponent } from './setup/menu/menu.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { PublicFooterComponent } from './shared/public-footer/public-footer.component';
import { PhonemaskDirective } from './directives/phonemask.directive';
import { BranchlistComponent } from './setup/branchlist/branchlist.component';
import { AddBranchComponent } from './setup/add-branch/add-branch.component';
import { DataTablesModule } from 'angular-datatables';
import { EditProductComponent } from './setup/edit-product/edit-product.component';
import { EditGalleryComponent } from './setup/edit-gallery/edit-gallery.component';
import { EditBranchComponent } from './setup/edit-branch/edit-branch.component';
import { CoffeePageComponent } from './setup/coffee-page/coffee-page.component';
import { CakePageComponent } from './setup/cake-page/cake-page.component';
import { FoodPageComponent } from './setup/food-page/food-page.component';
import { EditUsersComponent } from './setup/edit-users/edit-users.component';
import { CustomerDashboardComponent } from './setup/customer-dashboard/customer-dashboard.component';
import { CategoryMgtComponent } from './setup/category-mgt/category-mgt.component';
import { AddCategoryComponent } from './setup/add-category/add-category.component';
import { EditCategoryComponent } from './setup/edit-category/edit-category.component';
import { AddSubCategoryComponent } from './setup/add-sub-category/add-sub-category.component';
import { MyProfileComponent } from './setup/my-profile/my-profile.component';
import { EditSubCategoryComponent } from './setup/edit-sub-category/edit-sub-category.component';
import { SubcategoryMgtComponent } from './setup/subcategory-mgt/subcategory-mgt.component';
import { OrderDetailListComponent } from './setup/order-detail-list/order-detail-list.component';
import { CustomerOrderDetailsComponent } from './setup/customer-order-details/customer-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    HomeComponent,
    ProductComponent,
    OrderComponent,
    GalleryComponent,
    AboutComponent,
    OrderDetailsComponent,
    CartComponent,
    CheckoutComponent,
    RegisterComponent,
    NavbarComponent,
    SfooterComponent,
    UserlistComponent,
    OrderlistComponent,
    ProductlistComponent,
    AdduserComponent,
    AddProductComponent,
    RewardlistComponent,
    GallerylistComponent,
    AddGalleryComponent,
    DashboardNavbarComponent,
    LoginComponent,
    MenulistComponent,
    AddMenuComponent,
    MenuComponent,
    PublicFooterComponent,
    PhonemaskDirective,
    BranchlistComponent,
    AddBranchComponent,
    EditProductComponent,
    EditGalleryComponent,
    EditBranchComponent,
    CoffeePageComponent,
    CakePageComponent,
    FoodPageComponent,
    EditUsersComponent,
    CustomerDashboardComponent,
    CategoryMgtComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddSubCategoryComponent,
    MyProfileComponent,
    EditSubCategoryComponent,
    SubcategoryMgtComponent,
    OrderDetailListComponent,
    CustomerOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgxPaginationModule,
    IvyCarouselModule,
    DataTablesModule,

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
