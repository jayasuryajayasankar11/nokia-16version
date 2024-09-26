import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MastersComponent } from './masters/masters.component';
import { RcmainComponent } from './rcmain/rcmain.component';
import { RecivingComponent } from './reciving/reciving.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { MainstackComponent } from './mainstack/mainstack.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MainstoreComponent } from './mainstore/mainstore.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { UploadedDataComponent } from './uploaded-data/uploaded-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';


@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],


  declarations: [
    AppComponent,LoginComponent,HeaderComponent,
    HomeComponent,
    MastersComponent,
    RcmainComponent,
    RecivingComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    NewaccountComponent,
    MainstackComponent,
     MainstoreComponent,
    AboutComponent,
    FooterComponent,
    EnterprisesComponent,
    UploadedDataComponent,
    AlertDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
