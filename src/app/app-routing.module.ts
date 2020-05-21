import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { WishlistComponent } from "./components/wishlist/wishlist.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { ContactusComponent } from "./components/contactus/contactus.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: ProductsComponent,
    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      { path: "list", component: ProductListComponent },
      { path: "details/:id", component: ProductDetailsComponent },
    ],
  },
  { path: "account", component: AccountDetailsComponent },
  { path: "cart", component: ShoppingCartComponent },
  { path: "wishList", component: WishlistComponent },
  {
    path: "orders",
    component: OrdersComponent,
    children: [
      { path: "list", component: OrderListComponent },
      { path: "details/:id", component: OrderDetailsComponent },
    ],
  },
  { path: "contact", component: ContactusComponent },
  { path: "about", component: AboutusComponent },
  { path: "**", component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}