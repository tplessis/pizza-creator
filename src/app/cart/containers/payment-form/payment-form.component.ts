import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCardFormComponent } from '../../components/credit-card-form/credit-card-form.component';
import * as confetti from 'canvas-confetti';

export const conditionalValidator = (predicate, validator) => {
  return (formControl) => {
    if (!formControl.parent) {
      return null;
    }
    if (predicate()) {
      return validator(formControl);
    }
    return null;
  };
};

@Component({
  selector: 'pizza-payment-form',
  templateUrl: './payment-form.component.html'
})
export class PaymentFormComponent implements OnInit {
  form = this.fb.group({
    method: [null, Validators.required],
    card: this.fb.group({
      number: [
        null,
        [Validators.pattern(/([0-9]{4} [0-9]{4,6} [0-9]{4,6} ?[0-9]{0,4})/)]
      ],
      name: [null],
      expiration: [null],
      code: [null]
    })
  });

  @ViewChild(CreditCardFormComponent) creditCardForm: CreditCardFormComponent;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.form.markAllAsTouched();
    this.creditCardForm.refresh();

    if (this.form.valid) {
      this.fireworks();
    }
  }

  private fireworks(): void {
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'confettiCanvas';
    confettiCanvas.width = window.screen.width;
    confettiCanvas.height = window.screen.height;
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.top = '0';
    document.body.appendChild(confettiCanvas);

    const conf = confetti.create(confettiCanvas);
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    const fire = (particleRatio, opts) => {
      conf(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio)
        })
      );
    };

    fire(0.25, {
      spread: 26,
      startVelocity: 55
    });

    fire(0.2, {
      spread: 60
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.25, {
      spread: 200,
      startVelocity: 55
    });

    const canvasRemoveInterval = setInterval(() => {
      const canvas = document.getElementById('confettiCanvas');
      if (canvas) {
        document.body.removeChild(canvas);
      }
      clearInterval(canvasRemoveInterval);
    }, 3000);
  }
}
