import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderService: LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    // this.leaders = this.leaderService.getLeaders();
    // this.leaderService.getLeaders()
    //   .then(leaders => this.leaders = leaders);

    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders);

  }
}
