import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { LanguagesModel } from '../../models/languages/languages.models';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private dbPath = '/languages';
  languagesRef: AngularFirestoreCollection<LanguagesModel>;

  constructor(private db: AngularFirestore) {
    this.languagesRef = db.collection(this.dbPath);
  }

  getLanguages(): AngularFirestoreCollection<LanguagesModel> {
    return this.languagesRef;
  }

  createLanguage(myLang: LanguagesModel): any {
    const { id, ...data } = myLang;
    return this.languagesRef.add({ ...data });
  }

  deleteLanguage(id?: string): Promise<void> {
    return this.languagesRef.ref.doc(id).delete();
  }
}
