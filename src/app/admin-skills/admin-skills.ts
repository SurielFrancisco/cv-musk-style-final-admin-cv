import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills';
import { SkillsModel } from '../models/skills/skills.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-skills',
  standalone: false,
  templateUrl: './admin-skills.html',
  styleUrl: './admin-skills.css',
})
export class AdminSkills {
  btntxt: string = "Agregar";
  skillsList: SkillsModel[] = [];
  mySkill: SkillsModel = new SkillsModel();
  
  constructor(public skillsService: SkillsService) {
    this.skillsService.getSkills().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      )
    ).subscribe(data => {
      this.skillsList = data;
    });
  }

  agregarItem() {
    this.skillsService.createSkill(this.mySkill).then(() => {
      this.mySkill = new SkillsModel();
    });
  }

  deleteItem(id?: string) {
    this.skillsService.deleteSkill(id);
  }
}
