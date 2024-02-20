import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogService } from 'src/app/shared/services/catalog.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product-item-page',
  templateUrl: './product-item-page.component.html',
  styleUrls: ['./product-item-page.component.scss']
})
export class ProductItemPageComponent implements OnInit, OnDestroy {
  private subscribtionParams: Subscription;
  private subscribtionCatalog: Subscription;

  public productId: number;
  public product: ProductType;
  public products: ProductType[];

  constructor(private catalogService: CatalogService,
    public route: ActivatedRoute,
    private router: Router) {
    this.subscribtionParams = new Subscription();
    this.subscribtionCatalog = new Subscription();
    this.productId = 0;
    this.products = [];
    this.product = {
      id: 0,
      image: ' ',
      title: ' ',
      price: ' ',
      description: ' '
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'] - 1;
    });

    this.catalogService.getCatalogData()
      .subscribe(
        {
          next: data => {
            this.products = data;
            this.product = data[this.productId];
            let product = data.find(item => item.id === this.productId + 1);
            if (!product) {
              this.router.navigate(['/not-found']);
            }
          },
          error: error => {
            throw new Error('Карточка товара не найдена')
          },
        });


  }

  ngOnDestroy(): void {
    this.subscribtionParams.unsubscribe();
    this.subscribtionCatalog.unsubscribe();
  }

}
