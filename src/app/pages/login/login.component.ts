import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'info'
  inSubmission = false;
  hidePassword: boolean = true;
  
    credentials = {
      email: '',
      password: ''
    }
  
    constructor( 
      private auth:AuthService, 
      public router: Router,
      private users: UsersService
      ) { }
  
    ngOnInit(): void {
      
    }
    async login(){
      this.showAlert = true;

      setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
    try {
      this.auth.login(this.credentials).subscribe( 
        (res:any) => {
          console.log(res.data)
          if(res.code == "100"){
            this.alertMsg = res.message
            this.alertColor = 'danger'
            this.inSubmission = false
          } 
          else if(res.code == "200"){
            this.alertMsg = "Password Changed"
            this.alertColor = "success"
            const {token} = res.data;
            const {email} = res.data;
            const data = res.data;
            console.log(token);
            localStorage.setItem('token', token)
     
            this.users.setLoginResponse(res.data);
              this.router.navigate(['/dashboard']);
          }

        }
      );

    }
    catch(e){
    }
      }, 1600)
    }

    
    
    

}
