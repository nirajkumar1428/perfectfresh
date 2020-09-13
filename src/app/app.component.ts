import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  title = 'applicant-portal';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

get isAdmin() {
    return this.currentUser && this.currentUser.role === "admin";
}

get isNgo() {
  return this.currentUser && this.currentUser.role === "ngo";
}

get isApplicants() {
  return this.currentUser && this.currentUser.role === "applicants";
}

async logout() {
   await this.authenticationService.logout();
   await this.router.navigate(['/login']);
}
}
