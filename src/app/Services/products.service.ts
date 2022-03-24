import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from  '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
providedIn:  'root'
})

export class ProductsService implements OnInit{    
    //varibles
    products:any;
    
    //httpOption
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

    //ctor
    constructor(private http: HttpClient){}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('https://localhost:44387/api/Products/GetProducts');}
    
    ngOnInit(): void {}
  }
   
