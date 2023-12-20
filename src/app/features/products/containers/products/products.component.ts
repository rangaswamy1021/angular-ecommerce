import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@features/products/models/product';
import { ProductService } from '@features/products/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }
}
