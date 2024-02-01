import { Component } from '@angular/core';
import { ProductsAdminComponent } from '../products-admin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ProductsAdminComponent,
    MatFormFieldModule,MatInputModule,MatButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
   constructor(private productService:ProductService,private alertify:AlertifyService)
   {}
   create (name: HTMLInputElement,stock: HTMLInputElement,price: HTMLInputElement)
   {
    const create_product: Create_Product= new Create_Product();
    create_product.name=name.value;
    create_product.stock=parseInt(stock.value);
    create_product.price=parseFloat(price.value);

    this.productService.create(create_product, ()=>{
      this.alertify.message("Products Added", {
        dismissOthers:true,
        messageType:MessageType.Success,
        position:Position.TopRight
      })
    });


   }
}
