import { Injectable, inject } from "@angular/core"
import { Product } from "../models/product.model"
import{map} from "rxjs/operators"
import { DataService } from "./data.service"

@Injectable()
export class ProductService{
    private productData: Product[] = []
    private ds = inject(DataService)
    private restUrl = 'http://localhost:3000/wsproducts'
    constructor(){
        // this.productData = [
        //     new Product(1, "Bravia", 67000, "Sony Smart Tv"),
        //     new Product(2, "Galaxy S", 15000, "Samsung basic phone"), 
        //     new Product(3, "iPhone 15 pro", 50000, "Mobile")
        // ]
    }

    getProductData(){
        return this.ds.readData(this.restUrl).pipe(map(respdata =>respdata as Product[]))
    }

    addProduct(modifiedProduct:Product){
        return this.ds.createData(this.restUrl, modifiedProduct).pipe(map(respdata =>respdata as Product))
    }
    updateProduct(modifiedProduct:Product){
        return this.ds.updateData(this.restUrl, modifiedProduct).pipe(map(respdata =>respdata as Product))
    }
    deleteProduct(id:number){
        return this.ds.deleteData(this.restUrl, id).pipe(map(respdata =>respdata as Product))
    }
}