import { Injectable } from "@angular/core";
import { CartItem } from "../models/cartitem.model";

@Injectable({
    //Register in root
    providedIn: "root"
})
export class CartService{
    private cartData: CartItem[] = []

    getCartData(){
        return this.cartData
    }

    addCartItem(newItem:CartItem){
        this.cartData.push(newItem)
    }

    deleteCartItem(idx:number){
        this.cartData.splice(idx, 1)
    }
}