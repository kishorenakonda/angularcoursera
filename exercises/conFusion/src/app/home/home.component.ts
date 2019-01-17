import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  errorMessage: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private baseURL) { }


  ngOnInit() {
    // this.dish = this.dishservice.getFeaturedDish();
    // this.promotion = this.promotionservice.getFeaturedPromotion();
    // this.leader = this.leaderService.getFeaturedLeader();
    // this.dishservice.getFeaturedDish().then(
    //   dish => this.dish = dish
    // )

    // this.promotionservice.getFeaturedPromotion().then(
    //   promotion => this.promotion = promotion
    // )

    // this.leaderService.getFeaturedLeader().then(
    //   leader => this.leader = leader
    // )

    this.dishservice.getFeaturedDish().subscribe(
      dish => this.dish = dish,
      errormess => this.errorMessage = <any>errormess
    )

    this.promotionservice.getFeaturedPromotion().subscribe(
      promotion => this.promotion = promotion,
      errormess => this.errorMessage = <any>errormess
    )

    this.leaderService.getFeaturedLeader().subscribe(
      leader => this.leader = leader,
      errormess => this.errorMessage = <any>errormess
    )
  }

}
