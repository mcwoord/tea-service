import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProductType } from '../../types/product.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  public products: ProductType[] = []

  constructor(private http: HttpClient) {

  }

  public getCatalogData(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }

}



