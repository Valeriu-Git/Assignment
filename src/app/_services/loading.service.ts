import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private toggleSpinnerSubject = new Subject<boolean>();
  constructor() {}

  public listenToSpinnerChanges(): Observable<boolean> {
    return this.toggleSpinnerSubject.asObservable();
  }

  public showSpinner(): void {
    this.toggleSpinnerSubject.next(true);
  }

  public hideSpinner(): void {
    this.toggleSpinnerSubject.next(false);
  }
}
