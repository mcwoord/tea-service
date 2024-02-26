import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Page404Component } from './page404/page404.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
