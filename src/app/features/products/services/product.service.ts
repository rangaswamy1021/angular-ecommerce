import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly products: BehaviorSubject<Product[] | null> =
    new BehaviorSubject(null);

  constructor(private readonly http: HttpClient) {}

  /**
   *
   * Get Products Observable
   * @readonly
   * @type {Observable<Product[]>}
   */
  get products$(): Observable<Product[]> {
    return this.products.asObservable();
  }

  /**
   * Get All Products
   *
   * @returns {Observable<Product[]>}
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`).pipe(
      tap((response) => {
        this.products.next(response);
      })
    );
  }

  /**
   * Get Single Product
   *
   * @param {number} productId
   * @returns {Observable<Product>}
   */
  getProductById(productId: number): Observable<Product> {
    return this.http
      .get<Product>(`${environment.apiUrl}/products/${productId}`)
      .pipe(tap((_response) => {}));
  }
}
