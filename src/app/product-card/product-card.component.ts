import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Product } from './product.model';
import { CommonModule, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Tag } from 'primeng/tag';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule, TitleCasePipe, CurrencyPipe, ButtonModule, Tag],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() hasCartButton: boolean = false;
  productService = inject(ProductService);
  router = inject(Router);

  manageProductInCart(product: Product): void {
    if (this.productService.productsInCart().some(p => p.id === product.id)) {
      this.productService.removeProductFromCart(product);
    }
    else {
      this.productService.addProductToCart(product);
    }
  }

  isInCart(product: Product): boolean {
    return this.productService.productsInCart().some((p: Product) => p.id === product.id);
  }

  viewDetails(product: Product): void {
    this.router.navigate([`/products/${product.id}`]);
  }

}
