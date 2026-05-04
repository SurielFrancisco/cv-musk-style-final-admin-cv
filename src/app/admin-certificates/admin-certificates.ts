import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates';
import { CertificatesModel } from '../models/certificates/certificates.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-certificates',
  standalone: false,
  templateUrl: './admin-certificates.html',
  styleUrl: './admin-certificates.css',
})
export class AdminCertificates {
  btntxt: string = "Agregar";
  certificatesList: CertificatesModel[] = [];
  myCertificate: CertificatesModel = new CertificatesModel();
  
  constructor(public certificatesService: CertificatesService) {
    this.certificatesService.getCertificates().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      )
    ).subscribe(data => {
      this.certificatesList = data;
    });
  }

  agregarItem() {
    this.certificatesService.createCertificate(this.myCertificate).then(() => {
      this.myCertificate = new CertificatesModel();
    });
  }

  deleteItem(id?: string) {
    this.certificatesService.deleteCertificate(id);
  }
}
