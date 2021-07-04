import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private hardecodedAuthenticationService :HardcodedAuthenticationService) { }

  ngOnInit() {
    this.hardecodedAuthenticationService.Logout();
  }

}
