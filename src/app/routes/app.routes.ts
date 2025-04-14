import { Routes } from '@angular/router';
import { Path } from './path.constants';
import { authGuard } from '../auth/auth.guard';

export const routes: Routes = [
    {
        path: Path.PRODUCTS,
        canActivate: [authGuard],
        loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: Path.PRODUCT_DETAILS,
        canActivate: [authGuard],
        loadComponent: () => import('../product-details/product-details.component').then(m => m.ProductDetailsComponent)
    },
    {
        path: Path.SHOPPING_CART,
        canActivate: [authGuard],
        loadComponent: () => import('../cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: Path.ANY,
        redirectTo: Path.PRODUCTS
    }
];
