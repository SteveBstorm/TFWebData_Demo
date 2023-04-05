import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomsValidatorsService {

  constructor() { }
  
  isAdult(control : AbstractControl) : ValidationErrors | null{
    let requiredAge : number = 18;
    let value = control.value;
    if(!value) return null;
    let val_milli = new Date(value).getTime();
    let delta = new Date().getTime() - val_milli;
    let years = new Date(delta).getFullYear() - 1970;
    if(years < requiredAge) return {
      isAdult:{
        requiredAge : requiredAge,
        actualAge : years,
        defaultMessage: `You must be ${requiredAge} years old, come back in ${requiredAge-years} years`
      }};
    return null;
  }

  haveRequiredAge(requiredAge : number) : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {
      let value = control.value;
      if(!value) return null;
      let val_milli = new Date(value).getTime();
      let delta = new Date().getTime() - val_milli;
      let years = new Date(delta).getFullYear() - 1970;
      if(years < requiredAge) return {
        isAdult:{
          requiredAge : requiredAge,
          actualAge : years,
          defaultMessage: `You must be ${requiredAge} years old, come back in ${requiredAge-years} years`
        }};
      return null;
    }
  }
}
