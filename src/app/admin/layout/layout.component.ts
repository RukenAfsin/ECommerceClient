import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from '../components/customer/customer.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { OrderComponent } from '../components/order/order.component';
import { ProductsAdminComponent } from '../components/products-admin/products-admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ CommonModule,
    HeaderComponent,SidebarComponent,FooterComponent,
    RouterModule,
    CustomerComponent,DashboardComponent,OrderComponent,ProductsAdminComponent,MatSidenavModule,MatListModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
 
 
}
