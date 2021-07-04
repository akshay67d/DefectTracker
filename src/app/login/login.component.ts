import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public invalidLogin = false;
  private formSubmitAttempt = false;
  username = "";
  password ="";
  errorMessage ="Invalid Credentials";
  constructor(private fb: FormBuilder,
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,

    public dialog: MatDialog
    //private authService: AuthService
    ) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['defectCreate', this.username])
      this.invalidLogin=false;
    }
    else{
      //this.invalidLogin=true;
      this.dialog.open(LoginPopupComponent);
     
      
    }
  }


}
