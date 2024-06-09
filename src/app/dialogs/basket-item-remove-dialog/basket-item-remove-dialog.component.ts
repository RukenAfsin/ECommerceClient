import { Component } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';

@Component({
  selector: 'app-basket-item-remove-dialog',
  standalone: true,
  imports: [],
  templateUrl: './basket-item-remove-dialog.component.html',
  styleUrl: './basket-item-remove-dialog.component.scss'
})
export class BasketItemRemoveDialogComponent  extends BaseDialog<BasketItemRemoveDialogComponent>{

}
