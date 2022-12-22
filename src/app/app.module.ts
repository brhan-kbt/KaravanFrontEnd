import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
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
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgxPaginationModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
