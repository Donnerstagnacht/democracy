import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GeneralFormsService {

  constructor() { }

  errorHandling(formGroup: FormGroup, control: string, error: string): boolean {
    return formGroup.controls[control].hasError(error);
  }
}
