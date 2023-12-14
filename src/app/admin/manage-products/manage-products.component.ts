import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product..service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  //inject product service
  private productService = inject(ProductService)

  mgProduct: Product[] = []
  
  ngOnInit()
  {
    //console.log("In manage product ", this.productService.getProductData())
    this.mgProduct = this.productService.getProductData()
  }

}
