import { Injectable } from "@angular/core"
import { Product } from "../models/product.model"

@Injectable()
export class ProductService{
    private productData: Product[] = []

    constructor(){
        this.productData = [
            new Product(1, "Bravia", 67000, "Sony Smart Tv"),
            new Product(2, "Galaxy S", 15000, "Samsung basic phone"), 
            new Product(3, "iPhone 15 pro", 50000, "Mobile")
        ]
    }

    getProductData(){
        return this.productData
    }
}