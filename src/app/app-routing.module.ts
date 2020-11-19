import { ItemCheckoutListComponent } from './Components/item-checkout-list/item-checkout-list.component';
import { BasketCheckoutComponent } from './Components/basket-checkout/basket-checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", component: ItemCheckoutListComponent},
  {path: "checkout", component: BasketCheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
