import { ProductService } from '@features/products/services/product.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@features/products/models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  id: number;
  product: Product;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.id = +this.route.snapshot.params['productId'];
    this.productService.getProductById(this.id).subscribe((res) =>{
     this.product = res;
    })
  }

}
