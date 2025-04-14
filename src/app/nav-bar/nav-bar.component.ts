import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CommonModule } from '@angular/common';
import { Path } from '../routes/path.constants';
import { Router } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, Toolbar, ButtonModule, BadgeModule, OverlayBadgeModule, TabsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  routeToCart: Path = Path.SHOPPING_CART;
  router: Router = inject(Router);
  productService = inject(ProductService);

  navigateToCart(): void {
    this.router.navigate(['/', Path.SHOPPING_CART]);
  }

  navigateToProducts(): void {
    this.router.navigate(['/', Path.PRODUCTS]);
  }

}
