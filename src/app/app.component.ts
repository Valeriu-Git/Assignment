import { Component, OnInit } from '@angular/core';
import { LoadingService } from './_services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Test';
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {}
}
