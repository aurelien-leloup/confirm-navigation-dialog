import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material';
import { ConfirmNavigationComponent } from '../confirm-navigation/confirm-navigation.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends ConfirmNavigationComponent implements OnInit {


  constructor(private fb: FormBuilder,
              protected dialog: MatDialog,
              private userService: UsersService,
              protected router: Router) {
    super(dialog, router);
  }

  get f() {
    return this.userForm.controls;
  }

  userForm: FormGroup;


  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      occupation: ['', Validators.required],
      company: ['', Validators.required],
    });

  }

  hasUnsavedData(): boolean {
    return !this.dialogConfirmed && this.userForm.touched;
  }


  saveUser() {
    const user: User = {
      company: this.f.company.value,
      email: this.f.email.value,
      occupation: this.f.occupation.value,
      firstname: this.f.firstName.value,
      lastname: this.f.lastName.value
    };
    this.dialogConfirmed = true;
    this.userService.saveUser(user);
    this.router.navigate(['']);
  }
}
