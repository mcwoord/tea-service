import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { ProductItemPageComponent } from './product-item-page/product-item-page.component';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [ProductComponent, ProductItemPageComponent, CatalogComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  bootstrap: [CatalogComponent, ProductComponent, ProductItemPageComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
