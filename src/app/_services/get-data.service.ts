import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionsInterface } from '../_models/options.interface';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<OptionsInterface[]> {
    return this.http.get<OptionsInterface[]>(
      'http://doc.footballconnect.ro/dropdown/'
    );
  }
}
