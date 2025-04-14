import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ApiClient } from '../api-urls';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product-card/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiClient {

  products: WritableSignal<Product[]> = signal([]);
  productsInCart: WritableSignal<Product[]> = signal([]);
  onCartChange: Subject<boolean> = new Subject<boolean>();

  constructor(http: HttpClient) {
    super(http);
    this.getAllProducts().subscribe();
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS_URL).pipe(
      (tap(data => {
        this.products.set(data);
      })));
  }

  removeProductFromCart(product: Product): void {
    this.productsInCart.set(this.productsInCart().filter(p => p.id !== product.id));
    this.onCartChange.next(false);
  }

  addProductToCart(product: Product): void {
    if (!product) return;
    this.productsInCart.set([...this.productsInCart(), product]);
    this.onCartChange.next(true);
  }

  getProductById(id: number): Product | null{
    return this.products().find(product => product.id === id) ?? null;
  }
}
