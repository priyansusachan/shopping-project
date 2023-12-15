import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product..service';
import { Product } from '../../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  //inject product service
  private productService = inject(ProductService)
  private toaster = inject(ToastrService)
  fromProduct: Product = new Product(0, '', 0, '')

  mgProduct: Product[] = []
  
  ngOnInit()
  {
    //console.log("In manage product ", this.productService.getProductData())
    //this.mgProduct = this.productService.getProductData()
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getProductData().subscribe({
      next:(data) =>this.mgProduct = data,
      error: (err) =>this.toaster.error("Get data err", err)
    })
  }

  save(){
    if(this.fromProduct.id == 0){
      //Add Product
      this.productService.addProduct(this.fromProduct).subscribe({
        next:(data) =>{
          this.toaster.success("Product is Added")
          this.getAllProducts()
        },
        error: (err) => this.toaster.error("Add Product error", err)
      })
    }else{
      // Update the Product
      this.productService.updateProduct(this.fromProduct).subscribe({
        next:(data) => {
          this.toaster.success("Update product success")
          this.getAllProducts()
        }, error: (err) => this.toaster.error("update Product error", err)
      })
    }
    this.fromProduct = new Product(0, '', 0, '')
  }

  view(product:Product){
    this.fromProduct = product
  }

  delete(id:number){
    this.productService.deleteProduct(id).subscribe({
      next:() =>{
        this.toaster.success("Delete Product Success")
        this.getAllProducts()
      }, error: (err) => this.toaster.error("delete Product error", err)
    })
  }

}
