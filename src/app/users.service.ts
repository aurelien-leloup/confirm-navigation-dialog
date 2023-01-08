import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  newUsersSubject: BehaviorSubject<User[]>;
  index = 10;

  constructor(private httpClient: HttpClient) {
    this.newUsersSubject = new BehaviorSubject<User[]>([]);
  }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('assets/users.json')
      .pipe(
        switchMap(fileUsers => this.newUsersSubject.pipe(
          map(newUsers => ([...fileUsers, ...newUsers]))
        ))
      );
  }

  saveUser(user: User) {
    this.index++;
    this.newUsersSubject.next([
      ...this.newUsersSubject.value,
      {...user, id: this.index}
    ]);
  }
}
