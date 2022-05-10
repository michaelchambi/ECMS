import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../../../services/auth/forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  
  templateUrl: './forgot_password.component.html',
  styleUrls: ['./forgot_password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  
  alert:boolean = false;
  alertErr:boolean = false;
  sending: boolean = false;
  forgot: boolean = true;
  inputEmail: boolean = true;
  heading: boolean = true;


  data = {
    email: ''
  };

  constructor(
    private forgotPass: ForgotPasswordService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.forgot = false;
    this.sending = true;

    this.forgotPass.forgotPassword(this.data).subscribe(
      res => {
        localStorage.setItem('message', res.message);
        this.alert = true;
        this.forgot = false;
        this.sending = false;
        this.inputEmail = false;
        this.heading = false;
        this.alertErr = false;
        this.router.navigate(['/forgot-password']);
        console.log(res);

      },
      err => {
        localStorage.setItem('error', err.error.error);
        this.sending = false;
        this.forgot = true;
        this.alertErr = true;
        this.heading = false;
        console.log(err);

      }
    );
  }

  get message(): any {
    return localStorage.getItem('message');
}

get error(): any{
  return localStorage.getItem('error');
}

}



