import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //isUsserLoggedIn=false;
  constructor(public hardcodedAuthenticatioService: HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUsserLoggedIn=this.hardcodedAuthenticatioService.isUserLoggedIn();
    //console.log(this.isUsserLoggedIn);
 
    
  }

}
