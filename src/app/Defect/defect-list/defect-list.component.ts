import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PopupComponent } from 'src/app/popup/popup.component';
import { DefectService } from '../defect.service';

@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.scss']
})
export class DefectListComponent implements OnInit {
  defects = [
      
    ];
  constructor(private defectService :DefectService,
    public dialog: MatDialog) { }

  ngOnInit() {

      this.defects=this.defectService.getDefects();
  }

  deleteDefect(title){
    const popup = this.dialog.open(PopupComponent);
    popup.afterClosed().subscribe(data=>{
      console.log(data);
      if(data===true){
        this.defects=this.defects.filter(element=>
          element.title !== title
        )
      }
      else{
          return data;
      }
    })
  }
}
  //   console.log(title)
  //   console.log(this.defects)
  //  this.defects=this.defects.filter(element=>
  //    element.title !== title
  //  )}


