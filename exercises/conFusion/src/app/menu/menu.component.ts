import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class MenuComponent implements OnInit {

  // dishes: Dish[] = DISHES;
  dishes: Dish[];
  // selectedDish: Dish;
  errorMessage: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    // this.dishes = this.dishService.getDishes();

    // To Handle Promise
    // this.dishService.getDishes()
    //   .then(dishes => this.dishes = dishes);

    //If we use observable type then we need to change from .then() to .subscribe()
    this.dishService.getDishes()
      // .subscribe(dishes => this.dishes = dishes);
      .subscribe(dishes => this.dishes = dishes,
        errormess => this.errorMessage = <any>errormess); //handling error

  }

  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }
}
