import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { HeaderModel } from '../../models/header/header.models';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private dbPath = '/header';
  headerRef: AngularFirestoreCollection<HeaderModel>;

  constructor(private db: AngularFirestore) {
    this.headerRef = db.collection(this.dbPath);
  }

  getHeader(): AngularFirestoreCollection<HeaderModel> {
    return this.headerRef;
  }

  createHeader(myHeader: HeaderModel): any {
    const { id, ...data } = myHeader;
    return this.headerRef.add({ ...data });
  }

  deleteHeader(id?: string): Promise<void> {
    return this.headerRef.ref.doc(id).delete();
  }
}
