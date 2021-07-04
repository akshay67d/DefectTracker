import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatIconModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DefectCreateComponent } from './Defect/defect-create/defect-create.component';
import { DefectListComponent } from './Defect/defect-list/defect-list.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefectCreateComponent,
    DefectListComponent,
    LoginComponent,
    FooterComponent,
    LogoutComponent,
    DashboardComponent,
    PopupComponent,
    LoginPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule
    
    

  ],
  providers: [ThemeService],
  entryComponents:[PopupComponent,LoginPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
