import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShowModalService } from 'src/app/shared/services/show-modal.service';
import { Observable, Subscription } from 'rxjs';
import { GoToCatalogEnum } from 'src/app/enums/got-to-catalog.enum';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  public showModal = false;
  private observer: Subscription;


  constructor(private handleModal: ShowModalService) {
    this.observer = new Subscription();
  }

  ngOnInit(): void {
    this.observer = this.handleModal.showModal(GoToCatalogEnum.route, GoToCatalogEnum.description, GoToCatalogEnum.buttonName, 10000).subscribe((data) => {
      this.showModal = data;
    })

  }

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }

  handeCloseEvent() {
    this.showModal = false;
  }



}
