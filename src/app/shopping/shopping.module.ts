import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ProductListComponent } from './product-list/product-list.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

@NgModule({
    declarations: [ShoppingListComponent, ProductListComponent, CartItemsComponent],
    //Accessing module members in another module
    exports:[ShoppingListComponent]
})
export class ShoppingModule{
    constructor()
    {
        console.log("Shopping Module Created.")
    }
}