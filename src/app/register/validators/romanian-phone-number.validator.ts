import { AbstractControl, ValidatorFn } from '@angular/forms';
import { PhoneErrorInterface } from '../../_models/errors/phone-error.interface';

export function romanianPhoneNumberValidator(
  control: AbstractControl
): PhoneErrorInterface | null {
  const value: string = control.value;
  const isValid = value
    ? value.match('^(?=0[723][2-8]\\d{7})(?!.*(.)\\1{2,}).{10}$')
    : null;
  return isValid
    ? null
    : {
        invalidPhone: true,
      };
}
