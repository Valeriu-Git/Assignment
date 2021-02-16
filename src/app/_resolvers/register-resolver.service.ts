import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { OptionsInterface } from '../../../../Test/src/app/_models/options.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../../../../Test/src/app/_services/get-data.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterResolver implements Resolve<OptionsInterface[]> {
  constructor(private getDataService: GetDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<OptionsInterface[]>
    | Promise<OptionsInterface[]>
    | OptionsInterface[] {
    return this.getDataService.getData();
  }
}
