import { Component, Input, OnInit } from '@angular/core';
import { getCartList, removeCartItem } from 'src/Store/storeData';
import { ProductslistComponent } from '../productslist/productslist.component';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.css']
})
export class CartProductCardComponent implements OnInit {
@Input() product:any;

  constructor() { }
  
  ngOnInit(): void {
  }

  removeCartItem=(id:number): void=>{
    removeCartItem(id);
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
}

  
}
