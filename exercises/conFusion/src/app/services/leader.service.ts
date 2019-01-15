import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { resolve } from 'path';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  //when observable type is used. Remove .toPromise() method from the return function.
  
  getLeaders(): Observable<Leader[]> {
    // return LEADERS;
    // return Promise.resolve(LEADERS);
    //for service delay latency 
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS), 2000);
    // });

    //using rxjs
    // return of(LEADERS).pipe(delay(2000)).toPromise();

    //using observable
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader> {
    // return LEADERS.filter((leader) => { leader.id === id })[0];
    // return Promise.resolve(LEADERS.filter((leader) => { leader.id === id })[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) => { leader.id === id })[0]), 2000);
    // });
    return of(LEADERS.filter((leader) => { leader.id === id })[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    // return LEADERS.filter((leader) => leader.featured)[0];
    // return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    // });
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }
}
