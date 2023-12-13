import { Product } from "./product.model";

export class CartItem extends Product {
    constructor(id:number, name:string, price:number, public qty:number){
        super(id, name, price, "")
    }
}