import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  currentUser: User;
  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }
  ngOnInit() {
      this.loading = true;
  }
}
