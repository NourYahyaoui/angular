import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../Core/Models/product';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: Product;
  listProduct!:Product[];
  constructor(private serviceProduct:ProductServiceService,private route:Router ,private consumerProductSercice:ConsumerProductService) { }   //zdna service router hoa l bch yaatini navigateByUrl

  ngOnInit(): void {
    this.product=new Product();

  }

  
  ajouter(){
    //this.serviceProduct.addProduct(this.product);
    //this.route.navigateByUrl('/products')  // hedhy bch k nnzl save yraj3ni ll page product
  
    this.consumerProductSercice.addProduct(this.product).subscribe({
      next : () =>this.route.navigateByUrl('/products')
    })
  
  }

  

}
