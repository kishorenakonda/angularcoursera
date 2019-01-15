import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //when observable is used remove .toPromise of Method from the return value
  getDishes(): Observable<Dish[]> {
    // return DISHES;
    // return Promise.resolve(DISHES);

    // Simulate server latency with 2 second delay
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES), 2000);
    // });

    //using rxjs
    // return of(DISHES).pipe(delay(2000)).toPromise();

    //using observable
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    // return DISHES.filter((dish) => (dish.id === id))[0];
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    // });
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    // return DISHES.filter((dish) => dish.featured)[0];
    // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    // });
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}