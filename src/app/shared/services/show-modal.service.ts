import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowModalService {
  public modalWindowTimeout: NodeJS.Timeout;
  public route: string;
  public description: string;
  public buttonName: string;

  constructor() {
    this.route = '';
    this.description = '';
    this.buttonName = '';
    this.modalWindowTimeout = setTimeout(() => { });

  }

  public showModal(route: string, description: string, buttonName: string, timeout: number): Observable<boolean> {
    this.route  = route;
    this.description = description;
    this.buttonName = buttonName;

    let obs: Observable<boolean>;
    return obs = new Observable(observer => {
      (this.modalWindowTimeout as NodeJS.Timeout) = setTimeout(() => {
        observer.next(true)
      }, timeout);
    }
    )

  }



}
