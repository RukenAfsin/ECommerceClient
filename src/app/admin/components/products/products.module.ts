import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
