import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Core/Models/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
list!:Product[]
  id!: number
  constructor(private route:ActivatedRoute,private serviceProduct:ProductServiceService) { } //pour recuperer l id (hatyt service:activatedRoute)

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']   //baad nmchy ll html nhotou bch tsyrlou l affichage
    this.list=this.serviceProduct.listProduct;
    
  }

}
