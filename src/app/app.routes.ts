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
import { RegisterComponent } from './ui/components/register/register.component';



export const routes: Routes = [
      {
        path: 'admin',
        component: LayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'customers', component: CustomerComponent },
          { path: 'products', component: ProductsAdminComponent },
          { path: 'orders', component: OrderComponent },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
      },
      // Add a comma here
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "basket", component: BasketsComponent },
      { path: "products", component: ProductsComponent },
      { path: "register", component: RegisterComponent}
    ];
    