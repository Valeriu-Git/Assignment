import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { LoadingService } from '../../_services/loading.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loading-ui',
  templateUrl: './loading-ui.component.html',
  styleUrls: ['./loading-ui.component.scss'],
  animations: [
    trigger('toggle', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('500ms'),
      ]),
      transition('* => void', [
        animate(
          '500ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class LoadingUiComponent implements OnInit, OnDestroy {
  private intervalId: number;
  public counter: number;
  public isSpinnerVisible = false;
  private unsubscriber = new Subject<void>();
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.startCounter();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private initializeSubscriptions(): void {
    this.loadingService
      .listenToSpinnerChanges()
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((isSpinnerVisible) => {
        this.isSpinnerVisible = isSpinnerVisible;
        if (this.isSpinnerVisible) {
          this.startCounter();
        }
      });
  }

  private startCounter(): void {
    this.counter = 0;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 400);
  }
}
