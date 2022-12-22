import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
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
  { path: 'user-mgt', component: UserlistComponent },
  { path: 'add-user', component: AdduserComponent },
  { path: 'order-mgt', component: OrderlistComponent },
  { path: 'product-mgt', component: ProductlistComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'reward-mgt', component: RewardlistComponent },
  { path: 'gallery-mgt', component: GallerylistComponent },
  { path: 'add-galley', component: AddGalleryComponent },

  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
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
