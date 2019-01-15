import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    // return DISHES;
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    // return DISHES.filter((dish) => (dish.id === id))[0];
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    // return DISHES.filter((dish) => dish.featured)[0];
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
