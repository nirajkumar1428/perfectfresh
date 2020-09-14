import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../_services/authentication.service"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public consumer: any;

  constructor(
    public authenticationService : AuthenticationService,
    private toastr: ToastrService,

  ) { 
    this.consumer = {
      name: '',
      email: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('test', this.consumer)
    let payload = {
        "userName":this.consumer.name,
        "mobile":"8800689757",
        "emailId":this.consumer.email,
        "password":this.consumer.password,
        "state":"UP",
        "city":"Noida",
        "pinCode":"201301",
        "userRole":"Admin",
        "createdBy":"huhu"

    }
    this.authenticationService.signup(payload).subscribe(
      res => {
        if(res && res.status === "ok") {
          this.toastr.success(res.message)
        }
      })
  }

}
