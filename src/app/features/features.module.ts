import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './product-module/catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './product-module/product.module';
import { OrderModule } from './order-module/order-module.module';
import { MainModule } from './main-module/main.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    ProductModule,
    OrderModule,
    MainModule
  ],
  bootstrap: [CatalogComponent]
})
export class FeaturesModule { }
