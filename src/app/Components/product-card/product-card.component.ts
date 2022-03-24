import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { AddToCart, clearCartList, getCartList } from 'src/Store/storeData';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:any;
  constructor() { }
  
  onClick=(command: any)=>{};
  

  ngOnInit(): void {}

   AddToCart(id:Product): void{
    console.log(AddToCart(id));
    }

    clearCartList=()=>{console.log(clearCartList())}
    
    getCartList=()=>{getCartList()}
  

}
