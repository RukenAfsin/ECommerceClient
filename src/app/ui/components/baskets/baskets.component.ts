import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasketService } from '../../../services/common/models/basket.service';
import { List_Basket_Item } from '../../../contracts/basket/list_basket_item';
import { Update_Basket_Item } from '../../../contracts/basket/update_basket_item';
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
  constructor(private basketService:BasketService){
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










  async removeBasketItem(basketItemId:string){
   await  this.basketService.remove(basketItemId)
   $("."+ basketItemId).fadeOut(500)
  }


}
