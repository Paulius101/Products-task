import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { ProductService } from '../services/product.service';
import { ButtonModule } from 'primeng/button';
import { Product } from '../product-card/product.model';


@Component({
  selector: 'app-cart',
  imports: [CommonModule, OrderListModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  productService = inject(ProductService);

  removeFromCart(product: Product): void {
    this.productService.removeProductFromCart(product);
  }
}
