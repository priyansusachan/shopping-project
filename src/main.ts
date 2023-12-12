import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app/app.module"

//Root Module class
platformBrowserDynamic().bootstrapModule(AppModule)
console.log("Main TS File executed.")