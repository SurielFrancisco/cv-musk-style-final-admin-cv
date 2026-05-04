import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { InterestsModel } from '../../models/interests/interests.models';

@Injectable({
  providedIn: 'root',
})
export class InterestsService {
  private dbPath = '/interests';
  interestsRef: AngularFirestoreCollection<InterestsModel>;

  constructor(private db: AngularFirestore) {
    this.interestsRef = db.collection(this.dbPath);
  }

  getInterests(): AngularFirestoreCollection<InterestsModel> {
    return this.interestsRef;
  }

  createInterest(myInterest: InterestsModel): any {
    const { id, ...data } = myInterest;
    return this.interestsRef.add({ ...data });
  }

  deleteInterest(id?: string): Promise<void> {
    return this.interestsRef.ref.doc(id).delete();
  }
}
