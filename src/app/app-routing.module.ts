import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { DefectCreateComponent } from './Defect/defect-create/defect-create.component';
import { DefectListComponent } from './Defect/defect-list/defect-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'defectCreate/:name', component: DefectCreateComponent , canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent},
  {path:'dashboard', component: DashboardComponent, canActivate :[RouteGuardService]},
  {path:'defectList', component: DefectListComponent,  canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
