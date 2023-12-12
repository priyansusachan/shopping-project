import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@NgModule({
    declarations: [ShoppingListComponent],
    //Accessing module members in another module
    exports:[ShoppingListComponent]
})
export class ShoppingModule{
    constructor()
    {
        console.log("Shopping Module Created.")
    }
}