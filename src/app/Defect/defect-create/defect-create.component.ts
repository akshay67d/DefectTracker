import { Component, OnInit } from '@angular/core';
import { DefectService } from '../defect.service';

@Component({
  selector: 'app-defect-create',
  templateUrl: './defect-create.component.html',
  styleUrls: ['./defect-create.component.scss']
})
export class DefectCreateComponent implements OnInit {

  constructor(private defectService: DefectService) { }

  ngOnInit() {
  }

  onAddDefect(postDefect: any){
   this.defectService.addDefect(postDefect.value.title, postDefect.value.description);
   postDefect.resetForm();
  //  console.log('Forms value',postDefect.value)  //form all data
  // console.log('Forms value',postDefect.value.description)  //only particular data
  }
}
