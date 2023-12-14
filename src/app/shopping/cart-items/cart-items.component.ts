import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartitem.model';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent {

  private cartServive = inject(CartService)

  cartItems:CartItem[] = []

  ngOnInit(){
    this.cartItems = this.cartServive.getCartData()
  }

  deleteItem(idx:number)
  {
    this.cartServive.deleteCartItem(idx)
  }

  totalAmount(){
    let tot = 0
    for(let i = 0; i<this.cartItems.length; i++){
      tot += this.cartItems[i].price
    }

    return tot;
  }
}
