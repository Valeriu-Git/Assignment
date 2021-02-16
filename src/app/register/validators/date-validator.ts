import { AbstractControl } from '@angular/forms';
import { DateErrorInterface } from '../../_models/errors/date-error.interface';
import * as moment from 'moment';

export function dateValidator(
  control: AbstractControl
): DateErrorInterface | null {
  if (!control.value) {
    return {
      invalidDate: true,
    };
  }
  const date = moment(control.value);
  const currentDate = moment();
  if (moment.max(date, currentDate) === date) {
    return {
      invalidDate: true,
    };
  }

  const userAge = currentDate.diff(date, 'years');
  if (userAge < 14) {
    return {
      invalidDate: true,
    };
  }
  return null;
}
