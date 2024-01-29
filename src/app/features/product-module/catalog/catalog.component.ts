import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogService } from 'src/app/shared/services/catalog.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  public products: ProductType[];
  private subscription: Subscription;
  private paramsSubscription: Subscription;

  constructor(public catalogService: CatalogService,
    private route: ActivatedRoute) {
    this.products = [];
    this.subscription = new Subscription();
    this.paramsSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.catalogService.getCatalogData()
      .subscribe((data: ProductType[]) => {
        this.products = data;
      });

    this.paramsSubscription = this.route.params
      .subscribe(params => {
        console.log(params)
      })


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }




}
