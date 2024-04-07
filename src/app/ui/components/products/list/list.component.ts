import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { List_Product } from '../../../../contracts/list_product';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute){}


  currentPageNo: number;
  totalProductCount: number;
  totalPageCount: number;
  pageSize: number = 50;
  pageList: number[] = [];



  products: List_Product[]
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params=>{
      this.currentPageNo=parseInt(params["pageNo"]?? 1);

      const data:{totalProductCount:number,products:List_Product[]} = await this.productService.read(
        this.currentPageNo-1,this.pageSize,()=>{

      },
      errorMessage => {
  
      })
      this.products=data.products
      this.totalProductCount=data.totalProductCount
      this.totalPageCount=Math.ceil(this.totalProductCount/this.pageSize)

      this.pageList=[];

      if (this.currentPageNo - 3 <= 0)
      for (let i = 1; i <= 7; i++)
        this.pageList.push(i);

    else if (this.currentPageNo + 3 >= this.totalPageCount)
      for (let i = this.totalPageCount - 6; i <= this.totalPageCount; i++)
        this.pageList.push(i);

    else
      for (let i = this.currentPageNo - 3; i <= this.currentPageNo + 3; i++)
        this.pageList.push(i);
  });

}

}
