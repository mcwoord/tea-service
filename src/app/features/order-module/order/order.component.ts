import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderIsDone } from 'src/app/enums/order-is-done.enum';
import { OrderIsFailed } from 'src/app/enums/order-is-failed.enum';
import { CatalogService } from 'src/app/shared/services/catalog.service';
import { ShowModalService } from 'src/app/shared/services/show-modal.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  public product: ProductType;
  private productId: number;
  private subscription: Subscription;
  private subscriptionModal: Subscription;
  public formValidation: FormGroup;
  public showModal: boolean;

  constructor(private catalogService: CatalogService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private showModalService: ShowModalService) {
    this.subscription = new Subscription();
    this.subscriptionModal = new Subscription();
    this.formValidation = new FormGroup({});
    this.productId = 0;
    this.showModal = false;
    this.product = {
      id: 0,
      image: ' ',
      title: ' ',
      price: ' ',
      description: ' '
    }
  }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id'];
    this.subscription = this.catalogService.getCatalogData()
      .subscribe((data) => {
        let prd = data.find(item => item.id === this.productId);
        if (prd) {
          this.product = prd;
        } else {
          this.router.navigate(['/tea-service/not-found']);
        }
      });

    this.formValidation = new FormGroup({
      'description': new FormControl(null),
      'customerName': new FormControl(null, [Validators.required, Validators.pattern(/[A-Za-zА-Яа-я]/gm)]),
      'customerLastName': new FormControl(null, [Validators.required, Validators.pattern(/[A-Za-zА-Яа-я]/gm)]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern(/^(\+\d{0,1})?\d{11}$/)]),
      'ardess': new FormControl(null, [Validators.required, Validators.pattern(/[A-Za-z0-9А-Яа-я\s\/^|\\=+]*$/)]),
      'postCode': new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionModal.unsubscribe();
  }

  onSubmit() {
    let body = {
      name: this.formValidation.value.customerName,
      last_name: this.formValidation.value.customerLastName,
      phone: this.formValidation.value.phone,
      country: this.formValidation.value.ardess,
      zip: this.formValidation.value.postCode,
      product: this.product.title,
      address: this.formValidation.value.ardess,
      comment: this.formValidation.value.description,
    }

    let response$ = this.http.post<{ success: number }>('https://testologia.site/order-tea', body);
    response$.subscribe({
      next: () => {
        this.subscriptionModal = this.showModalService.showModal(OrderIsDone.route, OrderIsDone.description, OrderIsDone.buttonName, OrderIsDone.timeout)
          .subscribe(data => {
            this.showModal = data;
          })
      },
      error: () => {
        this.subscriptionModal = this.showModalService.showModal(OrderIsFailed.route, OrderIsFailed.description, OrderIsFailed.buttonName, OrderIsFailed.timeout)
          .subscribe(data => {
            this.showModal = data;
          })
      }
    });
  }

  handeCloseEvent() {
    this.showModal = false;
  }
}

