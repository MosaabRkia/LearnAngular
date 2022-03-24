import { Component,Input } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { HttpClient } from  '@angular/common/http';


@Component({
  selector: 'app-productslist',
  templateUrl:'./productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {
  products:any;

  constructor(service?:ProductsService) { 
    service?.getProducts().subscribe(data=>{
      this.products = data;
    })
  }
  ngOnInit(): void {}


}
