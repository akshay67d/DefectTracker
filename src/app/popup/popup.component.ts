import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupComponent>){ }

  ngOnInit() {
  }

  delete(){
    this.dialogRef.close(true);
  }

  notDelete(){
    this.dialogRef.close(false);
  }


}
