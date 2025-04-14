import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProductService } from '../services/product.service';
import { AddedToCart, RemovedFromCart } from '../constants/message.constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-toasts-container',
  imports: [ToastModule],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toasts-container.component.html',
  styleUrl: './toasts-container.component.scss'
})
export class ToastsContainerComponent {
  messageService = inject(MessageService);
  productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);
  productAdded = AddedToCart;
  productRemoved = RemovedFromCart;

  ngOnInit(): void {
    this.subscribeToCartChanges();
  }

  private subscribeToCartChanges(): void {
    this.productService.onCartChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isAdded: boolean) => {
        if (isAdded) {
          this.messageService.add(this.productAdded);
        } else {
          this.messageService.add(this.productRemoved);
        }
      });
  }
}
