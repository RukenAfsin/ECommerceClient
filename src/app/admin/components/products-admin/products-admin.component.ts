import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-admin',
  standalone: true,
  imports: [CommonModule,HttpClientModule ],
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.scss'
})
export class ProductsAdminComponent {

  constructor(private httpClientService:HttpClientService)
  {

    this.httpClientService.get({
      controller :"products"
    }).subscribe(data=> console.log(data))
   }

}
