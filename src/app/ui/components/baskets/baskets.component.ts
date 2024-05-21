import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasketService } from '../../../services/common/models/basket.service';
import { List_Basket_Item } from '../../../contracts/basket/list_basket_item';
import { Update_Basket_Item } from '../../../contracts/basket/update_basket_item';
import { OrderService } from '../../../services/common/models/order.service';
import { Create_Order } from '../../../contracts/order/create_order';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';
import { Router, Routes } from '@angular/router';
declare var $:any
const x: typeof BasketService = BasketService;
@Component({
  selector: 'app-baskets',
  standalone: true,
  imports: [ CommonModule,],
  templateUrl: './baskets.component.html',
  styleUrl: './baskets.component.scss'
})
export class BasketsComponent {
  constructor(private basketService:BasketService,private orderService:OrderService,
    private toastrService:CustomToastrService,private router:Router){
  }

  basketItems:List_Basket_Item[]
  async ngOnInit(): Promise<void>{

    this.basketItems= await this.basketService.get()
  }

  async changeQuantity(object: any) {

    const basketItemId: string = object.target.attributes["id"].value;
    const quantity: number = object.target.value;
    const basketItem: Update_Basket_Item = new Update_Basket_Item();
    basketItem.basketItemId = basketItemId;
    basketItem.quantity = quantity;
    await this.basketService.updateQuantity(basketItem);
  }

//   async changeQuantity(object: any) {
//     const basketItemId: string = object.target.attributes["id"].value;
//     const quantity: number = parseInt(object.target.value, 10);

//     const basketItem: Update_Basket_Item = {
//         basketItemId: basketItemId,
//         quantity: quantity
//     };

//     await this.basketService.updateQuantity(basketItem); // Burada updateQuantity fonksiyonunu çağırıyoruz
// }

async shoppingComplete(){
  const order: Create_Order=new Create_Order()
  order.address="Ankara",
  order.description="İt is just a test baby"
  await this.orderService.create(order)
  this.toastrService.message("Your order is received", "Order is created" , {
    messageType:ToastrMessageType.Info,
    position:ToastrPosition.TopRight
  })
  this.router.navigate(["/"])

}

  async removeBasketItem(basketItemId:string){
   await  this.basketService.remove(basketItemId)
   $("."+ basketItemId).fadeOut(500)
  }


}
