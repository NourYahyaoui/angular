import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/Models/product';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string ="welcome";
  listProduct!:Product[];
  priceMax!:number;
  calc!:number;

  constructor(private serviceProduct:ProductServiceService,private serviceClcul:CalculService, private consumerProduct : ConsumerProductService) { }

  ngOnInit(): void {
   // this.listProduct=this.serviceProduct.listProduct;
    this.consumerProduct.getProduct().subscribe({
      next :(data)=> this.listProduct=data,
    });
  }

  buy(i:number){
    if (this.listProduct[i].quantity>0)
    {this.listProduct[i].quantity=this.listProduct[i].quantity-1;}
  }

  /*
  like(i:number){
    this.listProduct[i].like=this.listProduct[i].like+1;
  }
*/

like(product:Product){
  let i = this.listProduct.indexOf(product);
  this.listProduct[i].like++;
}
  calculer(){
    this.calc =this.serviceClcul.getNumberOf( this.listProduct, 'quantity' , 0)
    
  }
}
