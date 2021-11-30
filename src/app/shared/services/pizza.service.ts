import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPizzaSize } from '../models/pizza-size.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPizzaTopping } from '../models/pizza-topping.interface';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getSizes(): Observable<IPizzaSize[]> {
    return this.http
      .get<IPizzaSize[]>('/assets/datas/sizes.json')
      .pipe(catchError((error: any) => throwError(error.error)));
  }

  getToppings(): Observable<IPizzaTopping[]> {
    return this.http
      .get<IPizzaTopping[]>('/assets/datas/toppings.json')
      .pipe(catchError((error: any) => throwError(error.error)));
  }
}
