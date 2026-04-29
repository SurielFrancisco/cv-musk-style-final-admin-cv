import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminCertificates } from './admin-certificates/admin-certificates';
import { AdminEducation } from './admin-education/admin-education';
import { AdminHeader } from './admin-header/admin-header';
import { AdminInterests } from './admin-interests/admin-interests';
import { AdminLanguages } from './admin-languages/admin-languages';
import { AdminSkills } from './admin-skills/admin-skills';
import { AdminWorkexperience } from './admin-workexperience/admin-workexperience';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    App,
    AdminCertificates,
    AdminEducation,
    AdminHeader,
    AdminInterests,
    AdminLanguages,
    AdminSkills,
    AdminWorkexperience
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
  ],
  bootstrap: [App]
})
export class AppModule { }
