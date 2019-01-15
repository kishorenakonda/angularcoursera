import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // dishes: Dish[] = DISHES;
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    // this.dishes = this.dishService.getDishes();

    // To Handle Promise
    // this.dishService.getDishes()
    //   .then(dishes => this.dishes = dishes);

    //If we use observable type then we need to change from .then() to .subscribe()
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);

  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
