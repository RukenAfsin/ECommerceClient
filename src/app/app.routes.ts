// app.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { CustomerComponent } from './admin/components/customer/customer.component';
import { OrderComponent } from './admin/components/order/order.component';
import { BasketsComponent } from './ui/components/baskets/baskets.component';
import { ProductsComponent } from './ui/components/products/products.component';
import { ProductsAdminComponent } from './admin/components/products-admin/products-admin.component';



export const routes: Routes = [
   
      
      {path:"admin", component: LayoutComponent}, 
      {path:"admin/dashboard", component: DashboardComponent}, 
      {path:"admin/customers", component:CustomerComponent},
      {path:"admin/products", component:ProductsAdminComponent},
      {path:"admin/orders", component:OrderComponent},

   
      
      { path:"", component: HomeComponent},
      {path:"home", component: HomeComponent },
      { path:"basket", component:BasketsComponent},
      { path:"products",component:ProductsComponent},
];