import { AfterViewInit, Component, Output, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';7
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from '../../../../directives/admin/delete.directive';
import { FileUploadComponent, FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';
import { FileUploadDialogComponent } from '../../../../dialogs/file-upload-dialog/file-upload-dialog.component';

declare var $:any;

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,DeleteDirective,FileUploadComponent,FileUploadDialogComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent{
constructor(private productService:ProductService,private alertifyService:AlertifyService){}

onFileUploadClick(){}

async ngAfterViewInit() {
  await this.getProducts(); 
  this.dataSource.paginator = this.paginator;
}

displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate','photo','edit','delete'];
dataSource :MatTableDataSource<List_Product>= null;
@ViewChild(MatPaginator) paginator: MatPaginator;


async getProducts(){
  const allProducts:{totalCount:number;
    products:List_Product[]} =await this.productService.read(this.paginator?
    this.paginator.pageIndex:0,this.paginator?
    this.paginator.pageSize:5,()=>errorMessage=>
  this.alertifyService.message(errorMessage,{
    dismissOthers:true,
    messageType:MessageType.Error,
    position:Position.TopRight
  }))
   this.dataSource=new MatTableDataSource<List_Product>(allProducts.products)
   this.paginator.length=allProducts.totalCount
}


async pageChanged(){
  await this.getProducts();
}


  
}
