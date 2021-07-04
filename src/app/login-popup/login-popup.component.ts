import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginPopupComponent>) { }

  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close(true);
  }

}
