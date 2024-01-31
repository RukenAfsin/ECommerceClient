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



    // this.httpClientService.post({   
    //   controller:"products"
    //  },{
    //   name:"Kalem",
    //   stock:100,
    //   price:15
    //  }).subscribe();

    

    //  this.httpClientService.post({   
    //   controller:"products"
    //  },{
    //   name:"Kağıt",
    //   stock:1000,
    //   price:5
    //  }).subscribe();


    //  this.httpClientService.post({   
    //   controller:"products"
    //  },{
    //   name:"Silgi",
    //   stock:50,
    //   price:2.5
    //  }).subscribe();


    //  this.httpClientService.put({
    //   controller:"products",
  
    //  },{
    //   id:"b1367560-7d6d-44bd-9e9b-08dc229e9e94",
    //   name:"Renkli Kağıt",
    //   stock:1500,
    //   price:5.5
    //  }).subscribe()

  this.httpClientService.delete({
    controller:"products"
  },"fe0c2e71-188f-4f6f-7223-08dc15c56737")
  .subscribe();
   }

}
