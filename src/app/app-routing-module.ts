import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeader } from './admin-header/admin-header';
import { AdminWorkexperience } from './admin-workexperience/admin-workexperience';
import { AdminEducation } from './admin-education/admin-education';
import { AdminCertificates } from './admin-certificates/admin-certificates';
import { AdminSkills } from './admin-skills/admin-skills';
import { AdminLanguages } from './admin-languages/admin-languages';
import { AdminInterests } from './admin-interests/admin-interests';

const routes: Routes = [
  { path: 'header', component: AdminHeader },
  { path: 'workexperience', component: AdminWorkexperience },
  { path: 'education', component: AdminEducation },
  { path: 'certificates', component: AdminCertificates },
  { path: 'skills', component: AdminSkills },
  { path: 'languages', component: AdminLanguages },
  { path: 'interests', component: AdminInterests }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
