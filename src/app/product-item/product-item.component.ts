import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
 import { Product } from '../Core/Models/product';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() pr!:Product
@Output() incrementEvent = new EventEmitter();

  constructor(private ps:ConsumerProductService,private route:Router, private ps2 : ProductServiceService) { }

  ngOnInit(): void {
   }

  increment(){
    this.incrementEvent.emit(this.pr);
  }

  delete(id:string){
    
    this.ps.deleteProduct(id).subscribe({
      next : () =>this.ps2.listProduct = this.ps2.listProduct.filter((p)=>p.id !=id)
    })    
  }

}
