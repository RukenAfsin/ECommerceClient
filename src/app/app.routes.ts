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
import { LoginComponent } from './ui/components/login/login.component';
import { AuthGuard } from './guards/common/auth.guard';



export const routes: Routes = [
      {
        path: 'admin',
        component: LayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
          { path: 'customers', component: CustomerComponent, canActivate:[AuthGuard] },
          { path: 'products', component: ProductsAdminComponent, canActivate:[AuthGuard] },
          { path: 'orders', component: OrderComponent , canActivate:[AuthGuard]},
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ], canActivate:[AuthGuard]
      },
      // Add a comma here
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "basket", component: BasketsComponent },
      { path: "products", component: ProductsComponent },
      { path: "register", component: RegisterComponent},
      { path: "login", component: LoginComponent}
    ];
    