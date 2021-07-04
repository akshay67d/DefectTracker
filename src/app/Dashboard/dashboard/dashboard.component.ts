import { Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import * as XLSX from 'xlsx';

import {
  Color,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  SingleDataSet,
} from "ng2-charts";
import { ApiService } from "src/app/service/api.service";


export interface UserData {
  id: string;
  name: string;
  status: string;
  Module: string;
}

/** Constants used to fill up our data base. */
// const Modules: string[] = [
//   'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
// ];
// const NAMES: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'status', 'Module'];
  dataSource: MatTableDataSource<UserData>;
  defects: any;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;



  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [
    ["Critical", "Defects"],
    ["High", "Defects",],
    ["Medium", "Defects",],
    ["Low", "Defects",]
    
  ];
  public pieChartData: SingleDataSet = [150, 300, 200, 350];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  public lineChartData: ChartDataSets[] = [
    { data: [0, 10, 40, 30, 40, 25, 50], label: 'Critical Defects' },
    { data: [0, 5, 10, 20, 30, 12, 20], label: 'High Defects' },
    { data: [0, 20, 10, 30, 30, 25, 10], label: 'Medium Defects' },
    { data: [0, 7, 12, 35, 25, 3, 5], label: 'Low Defects' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
   
  ];

  constructor( private Api: ApiService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    

    // Assign the data to the data source for the table to render
    
  }

 


  ngOnInit() {
    this.Api.getDefects().subscribe(data =>{
      this.defects=data;
      this.dataSource = new MatTableDataSource(this.defects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  
  exportExcel() {
    const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'filename.xlsx');
}



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     status: Math.round(Math.random() * 100).toString(),
//     Module: Modules[Math.round(Math.random() * (Modules.length - 1))]
//   };

