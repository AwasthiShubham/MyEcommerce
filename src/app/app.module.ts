import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component} from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  AngularFireAuthModule,
  NgbModule.forRoot(),
  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'shopping-carts', component: ShoppingCartsComponent},
    {path: 'check-out', component: CheckOutComponent},
    {path: 'order-success', component: OrderSuccessComponent},
    {path: 'my/orders', component: MyOrdersComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin/products', component: AdminProductsComponent},
    {path: 'admin/orders', component: AdminOrdersComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
