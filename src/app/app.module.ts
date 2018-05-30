import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GetpasswordComponent } from './getpassword/getpassword.component';
import { EditprofileComponent } from './dashboard/editprofile/editprofile.component';
import { ViewprofileComponent } from './dashboard/profile/viewprofile/viewprofile.component';
import { UserComponent } from './dashboard/user/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    GetpasswordComponent,
    EditprofileComponent,
    ViewprofileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
