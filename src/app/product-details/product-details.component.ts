import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent  {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  productIdSignal = signal(Number(this.route.snapshot.paramMap.get('id')));
  productSignal = computed(() =>
    this.productService.getProductById(this.productIdSignal())
  );

}
