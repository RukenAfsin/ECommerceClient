import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ CommonModule,ListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
