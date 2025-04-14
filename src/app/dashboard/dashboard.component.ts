import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    DataViewModule,
    ProductCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  productsService = inject(ProductService);
  route = inject(ActivatedRoute);
  showTable = signal(false);

  constructor() {
    this.onProductsStateChange();
  }

  private onProductsStateChange(): void {
    effect(
      () => {
        if (this.productsService.products().length === 0) return;
        this.showTable.set(true);
      }
    );
  }
}
