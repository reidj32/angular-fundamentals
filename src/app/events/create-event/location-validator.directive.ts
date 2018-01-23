import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    const isValid =
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value);

    if (isValid) {
      return null;
    } else {
      return { appLocationValidator: false };
    }
  }
}
