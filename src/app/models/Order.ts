import { Product } from "./Product";

 export class Order{
    ProductsArr?:Array<Product>;
    price?:number;
    constructor(ProductsArr:Array<Product>,price:number) {
        this.ProductsArr = ProductsArr;
        this.price = price;
    }   
}