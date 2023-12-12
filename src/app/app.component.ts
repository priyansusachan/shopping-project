//1. Refer Component Decorator from core library
import { Component } from "@angular/core";

//2. Use Component Decorator
@Component({
    //Specify the tag name for app component class
    selector: "<app-root>",
    
    //Provide output content for the component
    template: `
    <!-- <h3>My First Angular Component</h3> -->
    <app-header></app-header>
    <hr>
    <router-outlet></router-outlet>`
})
//3. Define Component class
export class AppComponent{
    constructor(){
        console.log("App Component created.")
    }
}