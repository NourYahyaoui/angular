import { Injectable } from '@angular/core';
import { Product } from '../Core/Models/product';

@Injectable({                //service et peut etre injecté 
  providedIn: 'root'     //root:utilisable dans tt l'app w service fyh instance wahda 
})
export class ProductServiceService {

  listProduct:Product[]=[
    {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
{id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
{id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0},
{id: "4", title: "T-shirt 4", price: 39, quantity: 12, like: 0},
{id: "5", title: "T-shirt 5", price: 26, quantity: 9, like: 0},

  ]

  constructor() { }

  addProduct(product:Product){
    this.listProduct.push(product);
  }

 
}
