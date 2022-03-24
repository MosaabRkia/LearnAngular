import { Component, OnInit } from '@angular/core';
import { PlaceOrderService } from 'src/app/Services/place-order.service';
import { buyItems, clearCartList, getCartList, getCartListTotal } from 'src/Store/storeData';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartProducts:any;
  service: PlaceOrderService;
  message:string;

  constructor(service: PlaceOrderService) { 
    this.service = service;
    this.message = "";
  }

  ngOnInit(): void {
    this.cartProducts = getCartList();
  }
  getTotal=():number=>{
    return getCartListTotal();
  }
  buyAll=():void=>{ //buyItems
   buyItems(this.service).subscribe((data: { [x: string]: any; })=>{
      alert(data["result"]);
      clearCartList();
    })
    setTimeout(() =>{
      this.message = ""
    },10000)
    // this.message = buyItems(this.service);
  }

}
