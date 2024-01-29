import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/main-module/main/main.component';
import { CatalogComponent } from './features/product-module/catalog/catalog.component';
import { OrderComponent } from './features/order-module/order/order.component';
import { ProductComponent } from './features/product-module/product/product.component';
import { ProductItemPageComponent } from './features/product-module/product-item-page/product-item-page.component';
import { Page404Component } from './features/main-module/page404/page404.component';

const routes: Routes = [  
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ProductItemPageComponent },
  { path: 'order/:id', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'not-found', component: Page404Component },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
