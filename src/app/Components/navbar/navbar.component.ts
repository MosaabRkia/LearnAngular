import { Component, OnInit } from '@angular/core';
import { getCartList } from 'src/Store/storeData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCartList=():number=>{return (getCartList().length)}
}
