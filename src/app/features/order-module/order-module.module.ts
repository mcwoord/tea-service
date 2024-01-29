import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [OrderComponent],
  bootstrap: [OrderComponent],

})
export class OrderModule { }
