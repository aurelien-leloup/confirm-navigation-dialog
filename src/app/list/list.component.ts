import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'occupation', 'company'];
  users$: Observable<User[]>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}
