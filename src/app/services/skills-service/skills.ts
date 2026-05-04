import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { SkillsModel } from '../../models/skills/skills.models';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private dbPath = '/skills';
  skillsRef: AngularFirestoreCollection<SkillsModel>;

  constructor(private db: AngularFirestore) {
    this.skillsRef = db.collection(this.dbPath);
  }

  getSkills(): AngularFirestoreCollection<SkillsModel> {
    return this.skillsRef;
  }

  createSkill(mySkill: SkillsModel): any {
    const { id, ...data } = mySkill;
    return this.skillsRef.add({ ...data });
  }

  deleteSkill(id?: string): Promise<void> {
    return this.skillsRef.ref.doc(id).delete();
  }
}
