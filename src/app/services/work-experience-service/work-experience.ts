import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WorkExperienceModel } from '../../models/work-experience/work-experience.models';    


@Injectable({
  providedIn: 'root',
})

export class WorkExperience {
  
  private dbPath = '/work-experience';
  workExperienceRef: AngularFirestoreCollection<WorkExperienceModel>;

  constructor(private db: AngularFirestore) {
    this.workExperienceRef = db.collection(this.dbPath);
  }

  getWorkExperience(): AngularFirestoreCollection<WorkExperienceModel> {
    return this.workExperienceRef;
  }

  createWorkExperience(myJob: WorkExperienceModel): any {
    const { id, ...data } = myJob;
    return this.workExperienceRef.add({ ...data });
  }

  deleteWorkExperience(id?: string): Promise<void> {
    return this.workExperienceRef.ref.doc(id).delete();
  }

}
