import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowModalService } from '../services/show-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public router: Router,
    private route: ActivatedRoute,
    public showModal: ShowModalService ) { }

  ngOnInit(): void {
  }

  closeClick() {
    this.closeEvent.emit(false);
  }

  goToCatalog() {
    this.closeClick();
    this.redirectToCatalog()
  }

  redirectToCatalog() {
    this.router.navigate([this.showModal.route], { relativeTo: this.route });

  }

}
