import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '',  redirectTo: '/product', pathMatch: 'full'},
  {path: 'product', component: ProductListComponent},
  {path: 'product/:id', component: ProductItemDetailComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'cart', component: CartComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
