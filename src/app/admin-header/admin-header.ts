import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header';
import { HeaderModel } from '../models/header/header.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-header',
  standalone: false,
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader {
  btntxt: string = "Agregar";
  headerList: HeaderModel[] = [];
  myHeader: HeaderModel = new HeaderModel();
  
  constructor(public headerService: HeaderService) {
    this.headerService.getHeader().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      )
    ).subscribe(data => {
      this.headerList = data;
    });
  }

  agregarItem() {
    this.headerService.createHeader(this.myHeader).then(() => {
      this.myHeader = new HeaderModel();
    });
  }

  deleteItem(id?: string) {
    this.headerService.deleteHeader(id);
  }
}
