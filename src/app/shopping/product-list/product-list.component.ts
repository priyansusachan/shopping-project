import { Component, Injectable } from '@angular/core';
import { ProductService } from '../../services/product..service';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartitem.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //Inject product service
  constructor(private psvc:ProductService, private cartService: CartService){

  }

  productList: Product[] = []

  ngOnInit(){
    //console.log(this.psvc.getProductData())
    this.productList = this.psvc.getProductData()
  }

  addToCart(product: Product){
    this.cartService.addCartItem(new CartItem(product.id,product.name, product.price, 1))
  }
}
