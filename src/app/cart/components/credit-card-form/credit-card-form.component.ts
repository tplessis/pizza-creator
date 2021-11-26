import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import Cleave from 'cleave.js';
import { Control } from 'mapbox-gl';

@Component({
  selector: 'pizza-credit-card-form',
  templateUrl: './credit-card-form.component.html'
})
export class CreditCardFormComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input()
  parent: FormGroup;

  @Output()
  submit = new EventEmitter<FormGroup>();

  @ViewChild('expiration', { read: ElementRef })
  expiration: ElementRef;

  @ViewChild('cardNumber', { read: ElementRef })
  cardNumber: ElementRef;

  @ViewChild('cvvCode', { read: ElementRef })
  cvvCode: ElementRef;

  private _cleaveExpiryInstance: Cleave;
  private _cleaveCardNumberInstance: Cleave;
  private _cleaveCvvCodeInstance: Cleave;

  get isCardMethod():boolean {
    return this.parent?.get('method')?.value === 'card';
  }

  constructor() {}

  ngOnInit(): void {
    this.parent
      ?.get('method')
      ?.valueChanges.pipe(
        tap((method: string) => {
          if (method === 'card') {
            this.addValidators(['card.number', 'card.name', 'card.expiration', 'card.code'], Validators.required);
          } else {
            this.removeValidators(['card.number', 'card.name', 'card.expiration', 'card.code'], Validators.required);
          }
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this._cleaveExpiryInstance = new Cleave(this.expiration.nativeElement, {
      ...{ date: true, datePattern: ['m', 'y'] }
    });
    this._cleaveCardNumberInstance = new Cleave(this.cardNumber.nativeElement, {
      ...{ creditCard: true }
    });
    this._cleaveCvvCodeInstance = new Cleave(this.cvvCode.nativeElement, {
      ...{ numericOnly: true, numeral: true }
    });
  }

  ngOnDestroy(): void {
    if (this._cleaveExpiryInstance) {
      this._cleaveExpiryInstance.destroy();
    }

    if (this._cleaveCardNumberInstance) {
      this._cleaveCardNumberInstance.destroy();
    }

    if (this._cleaveCvvCodeInstance) {
      this._cleaveCvvCodeInstance.destroy();
    }
  }

  private addValidators(formControls: string[], validators: ValidatorFn[] | ValidatorFn): void {
    formControls.map((control: string) => {
      this.parent?.get(control)?.addValidators(validators);
      this.parent?.get(control)?.updateValueAndValidity();
    });
  }

  private removeValidators(formControls: string[], validators: ValidatorFn[] | ValidatorFn): void {
    formControls.map((control: string) => {
      this.parent?.get(control)?.removeValidators(validators);
      this.parent?.get(control)?.updateValueAndValidity();
    });
  }
}
