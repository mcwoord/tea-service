import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-accordion-basic',
  standalone: true,
	imports: [NgbAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class NgbdAccordion implements OnInit {

  constructor(public config: NgbAccordionConfig) { 
    this.config.closeOthers = true
  }

  ngOnInit(): void {
  }

}
