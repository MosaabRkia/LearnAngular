import { Order } from "src/app/models/Order";
import { Product } from "src/app/models/Product";
import { PlaceOrderService } from "src/app/Services/place-order.service";

export const AddToCart =(product:Product):boolean =>{
    let cartList:Array<Product> = JSON.parse(localStorage.getItem('cart-list') || "[]");
    if(localStorage.getItem('cart-list') === null)
    {
        localStorage.setItem('cart-list',(JSON.stringify([product])) );
        return true;
    }
    else{
        
        if(cartList.findIndex(e=>e.id === product.id) !== -1){
            return false;
        }else
            {
                localStorage.setItem('cart-list',JSON.stringify([...cartList,product]));
                return true;
            }
     }

}

export const getCartList =() :Array<Product> =>{
    return JSON.parse(localStorage.getItem('cart-list') || '[]');
};

export const clearCartList =():void=> localStorage.removeItem('cart-list');

export const removeCartItem =(id:any) : void=> {
    let arr:Array<Product> = JSON.parse(localStorage.getItem('cart-list') || "[]");
   let newData = arr.filter((product)=>product.id !== id)
   console.log(newData)
   localStorage.setItem('cart-list',JSON.stringify(newData));
}

export const getCartListTotal=():number=>{
    let total:number = 0;
    getCartList().forEach(e=>{
         total += e.price;
    })
    return total;
}

export const buyItems = (service: PlaceOrderService):any=> {
    let order = new Order(getCartList(),getCartListTotal());
    return service.placeOrder(order);
    
}
