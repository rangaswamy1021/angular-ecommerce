import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Cart, CartRequest } from '../models/cart';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly carts: BehaviorSubject<Cart[] | null> = new BehaviorSubject(
    null
  );

  constructor(private readonly http: HttpClient) {}

  /**
   * Get cart Observable
   *
   * @readonly
   * @type {Observable<Cart[]>}
   */
  get carts$(): Observable<Cart[]> {
    return this.carts.asObservable();
  }

  /**
   * Get All Carts
   *
   * @returns {Observable<Cart[]>}
   */
  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${environment.apiUrl}/carts`).pipe(
      tap((response) => {
        this.carts.next(response);
      })
    );
  }

  /**
   * Add to cart
   *
   * @param {Cart} cart
   * @returns {Observable<Cart>}
   */
  addNewCart(cart: Cart): Observable<Cart> {
    return this.http
      .post<Cart>(`${environment.apiUrl}/carts`, cart)
      .pipe(tap((response) => {}));
  }

  /**
   * Update cart
   *
   * @param {Cart} cart
   * @returns {Observable<Cart>}
   */
  updateCart(cart: Cart): Observable<Cart> {
    return this.http
      .put<Cart>(`${environment.apiUrl}/carts`, cart)
      .pipe(tap((response) => {}));
  }


  /**
   * Delete Cart Item
   *
   * @param {number} cartId
   * @returns {Observable<Cart>}
   */
  deleteCart(cartId: number): Observable<Cart> {
    return this.http
      .delete<Cart>(`${environment.apiUrl}/carts${cartId}`)
      .pipe(tap((response) => {}));
  }
}
