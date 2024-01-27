import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from '../../ui/components/home/home.module';
import { BasketsModule } from '../../ui/components/baskets/baskets.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    OrderModule,
    CustomerModule,
    // HomeModule,
    // BasketsModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
