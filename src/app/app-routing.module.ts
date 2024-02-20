import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/main-module/main/main.component';
import { CatalogComponent } from './features/product-module/catalog/catalog.component';
import { OrderComponent } from './features/order-module/order/order.component';
import { ProductComponent } from './features/product-module/product/product.component';
import { ProductItemPageComponent } from './features/product-module/product-item-page/product-item-page.component';
import { Page404Component } from './features/main-module/page404/page404.component';

const routes: Routes = [  
  { path: 'tea-service', component: MainComponent },
  { path: 'tea-service/main', component: MainComponent },
  { path: 'tea-service/catalog', component: CatalogComponent },
  { path: 'tea-service/catalog/:id', component: ProductItemPageComponent },
  { path: 'tea-service/order/:id', component: OrderComponent },
  { path: 'tea-service/product', component: ProductComponent },
  { path: 'tea-service/not-found', component: Page404Component },
  { path: 'tea-service/**', redirectTo: 'tea-service/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
