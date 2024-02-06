import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-products-admin',
  
  standalone: true,
  imports: [CommonModule,HttpClientModule,
    MatSidenavModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatDialogModule,
    CreateComponent,ListComponent,DeleteDialogComponent],
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.scss'
})
export class ProductsAdminComponent {

  constructor(private httpClientService:HttpClientService)
  {}
  // @ViewChild(ListComponent) listComponents :ListComponent
  //  createdProduct(createdProduct: Create_Product){

  //   this.listComponents.getProducts();
  //  }
}
