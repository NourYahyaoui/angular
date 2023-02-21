import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Core/Models/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: Product;
  listProduct!:Product[];
  constructor(private serviceProduct:ProductServiceService,private route:Router) { }   //zdna service router hoa l bch yaatini navigateByUrl

  ngOnInit(): void {
    this.product=new Product();
  }
  ajouter(){
    this.serviceProduct.addProduct(this.product);
    this.route.navigateByUrl('/products')  // hedhy bch k nnzl save yraj3ni ll page product
  }

  

}
