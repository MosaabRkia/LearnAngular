import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from  '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Order } from '../models/Order';
import { Product } from '../models/Product';

@Injectable({
providedIn:  'root'
})

export class PlaceOrderService implements OnInit{    
    //varibles

    
    //httpOption
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

    //ctor
    constructor(private http: HttpClient){}

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    /**add a new order to the database */
placeOrder(order: Order): Observable<any> {
  console.log("arrived") 
       return this.http.post('https://localhost:44387/api/Orders/placeOrder', order, this.httpOptions)
     
}

    ngOnInit(): void {}
  }
   
