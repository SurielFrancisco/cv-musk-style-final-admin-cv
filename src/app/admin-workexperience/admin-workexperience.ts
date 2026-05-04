import { Component } from '@angular/core';
import { WorkExperience } from '../services/work-experience-service/work-experience';
import { WorkExperienceModel } from '../models/work-experience/work-experience.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-workexperience',
  standalone: false,
  templateUrl: './admin-workexperience.html',
  styleUrl: './admin-workexperience.css',
})
export class AdminWorkexperience {

  itemCount: number = 0;
  btntxt: string = "Agregar";
  goalText: string = "";
  workExperience: WorkExperienceModel[] = [];
  myWorkExperience: WorkExperienceModel = new WorkExperienceModel();
  
  constructor(public workExperienceService: WorkExperience) {
    this.workExperienceService.getWorkExperience().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      )
    ).subscribe(data => {
      this.workExperience = data;
      console.log(this.workExperience)
    });
  }

  agregarJob() {
    console.log(this.myWorkExperience);
    this.workExperienceService.createWorkExperience(this.myWorkExperience).then(() => {
      console.log('Created new item successfully!');
      this.myWorkExperience = new WorkExperienceModel();
    });
  }

  deleteJob(id?: string) {
    this.workExperienceService.deleteWorkExperience(id).then(() => {
      console.log('Item deleted successfully!');
    });
  }

}
