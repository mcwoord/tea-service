import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productItem: ProductType;

  constructor(private router: Router) {
    this.productItem = {
      id: 0,
      image: '',
      title: '',
      price: '',
      description: ''
    }
  }





}
