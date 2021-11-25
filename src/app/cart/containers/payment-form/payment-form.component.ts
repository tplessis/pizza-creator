import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as confetti from 'canvas-confetti';

export const conditionalValidator = (predicate, validator) => {
  return (formControl) => {
    console.log(formControl);
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.fireworks();
    }
  }

  private fireworks(): void {
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.width = window.screen.width;
    confettiCanvas.height = window.screen.height;
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.top = '0';
    document.body.appendChild(confettiCanvas);

    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    const fire = (particleRatio, opts) => {
      confetti.create(confettiCanvas)(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 200,
      startVelocity: 55,
    });

    setInterval(() => {
      document.body.removeChild(confettiCanvas);
    }, 3000);
  }
}
