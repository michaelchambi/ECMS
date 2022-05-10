import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/auth/login.service';
import { GeneralService } from '../../../services/general.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    alertErr:boolean = false;
    alertPass: boolean = false;
    signing: boolean = false;
    bfrsigin: boolean = true;
  
    data = {
      email: '',
      password: ''
    };
  errorMessage: any;
  isLoginFailed: any;
  
    constructor(
      private auth: LoginService,
      private router: Router,
      private general: GeneralService
    ) { }
   
    ngOnInit(): void {
      //this.sidebar.toggle()
      //this.intergrationVerification()
    }
   
    loginUser() {
      this.signing = true;
      this.bfrsigin = false;
      this.auth.loginUser(this.data).subscribe(
        res => {
          this.alertErr = false;
          this.alertPass = false;
          localStorage.setItem('roles',JSON.stringify(res.roles));
          localStorage.setItem('token', res.token);
          localStorage.setItem('user',res.user.id);
          this.router.navigate(['./dashboard']) .then(() => {
           // window.location.reload();
          });
        },
        err => {
          localStorage.setItem('error', err.error.error);
          localStorage.setItem('errPass', err.error.password);
          if(!err.error.error){
            this.alertErr = false;
            this.alertPass = true;
            this.bfrsigin = true;
            this.signing = false;
            console.log(err);
  
  
          }
  
          else{
            this.alertErr = true;
            this.alertPass = false;
            this.bfrsigin = true;
            this.signing = false;
          }
  
  
        }
      );
    }
  
  get error(): any{
    return localStorage.getItem('error');
  }
  
  get errPass(): any{
    return localStorage.getItem('errPass');
  }
  
  }
  


