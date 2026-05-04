import { Component } from '@angular/core';
import { EducationService } from '../services/education-service/education';
import { EducationModel } from '../models/education/education.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-education',
  standalone: false,
  templateUrl: './admin-education.html',
  styleUrl: './admin-education.css',
})
export class AdminEducation {
  btntxt: string = "Agregar";
  educationList: EducationModel[] = [];
  myEducation: EducationModel = new EducationModel();
  
  constructor(public educationService: EducationService) {
    this.educationService.getEducation().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      )
    ).subscribe(data => {
      this.educationList = data;
    });
  }

  agregarItem() {
    this.educationService.createEducation(this.myEducation).then(() => {
      this.myEducation = new EducationModel();
    });
  }

  deleteItem(id?: string) {
    this.educationService.deleteEducation(id);
  }
}
