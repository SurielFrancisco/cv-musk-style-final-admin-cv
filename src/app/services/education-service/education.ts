import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { EducationModel } from '../../models/education/education.models';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private dbPath = '/education';
  educationRef: AngularFirestoreCollection<EducationModel>;

  constructor(private db: AngularFirestore) {
    this.educationRef = db.collection(this.dbPath);
  }

  getEducation(): AngularFirestoreCollection<EducationModel> {
    return this.educationRef;
  }

  createEducation(myEdu: EducationModel): any {
    const { id, ...data } = myEdu;
    return this.educationRef.add({ ...data });
  }

  deleteEducation(id?: string): Promise<void> {
    return this.educationRef.ref.doc(id).delete();
  }
}
