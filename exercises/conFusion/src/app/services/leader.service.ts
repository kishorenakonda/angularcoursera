import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
// import { resolve } from 'path';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

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
    // return of(LEADERS).pipe(delay(2000));

    //using http service
    // return this.http.get<Leader[]>(baseURL + 'leadership');

    //using http service and handling error
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    // return LEADERS.filter((leader) => { leader.id === id })[0];
    // return Promise.resolve(LEADERS.filter((leader) => { leader.id === id })[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) => { leader.id === id })[0]), 2000);
    // });
    // return this.http.get<Leader>(baseURL + 'leadership/' + id);
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    // return LEADERS.filter((leader) => leader.featured)[0];
    // return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    // });
    return this.http.get<Leader>(baseURL + 'leadership?featured=true')
      .pipe(map(leader => leader[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
