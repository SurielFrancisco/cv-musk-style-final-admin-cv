import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CertificatesModel } from '../../models/certificates/certificates.models';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  private dbPath = '/certificates';
  certificatesRef: AngularFirestoreCollection<CertificatesModel>;

  constructor(private db: AngularFirestore) {
    this.certificatesRef = db.collection(this.dbPath);
  }

  getCertificates(): AngularFirestoreCollection<CertificatesModel> {
    return this.certificatesRef;
  }

  createCertificate(myCert: CertificatesModel): any {
    const { id, ...data } = myCert;
    return this.certificatesRef.add({ ...data });
  }

  deleteCertificate(id?: string): Promise<void> {
    return this.certificatesRef.ref.doc(id).delete();
  }
}
