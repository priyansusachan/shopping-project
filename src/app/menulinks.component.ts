import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    template: `<h1> Welcome to my angular shopping application</h1>
    <app-shopping-list></app-shopping-list>
    `
})
export class HomeComponent{

}

@Component({
    selector: "<not-found>",
    template: `<h1 style="color:red"> 404. View not found</h1>`
})
export class NotFoundComponent{

}