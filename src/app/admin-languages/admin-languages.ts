import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages';
import { LanguagesModel } from '../models/languages/languages.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-languages',
  standalone: false,
  templateUrl: './admin-languages.html',
  styleUrl: './admin-languages.css',
})
export class AdminLanguages {
  btntxt: string = "Agregar";
  languagesList: LanguagesModel[] = [];
  myLanguage: LanguagesModel = new LanguagesModel();
  
  constructor(public languagesService: LanguagesService) {
    this.languagesService.getLanguages().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      )
    ).subscribe(data => {
      this.languagesList = data;
    });
  }

  agregarItem() {
    this.languagesService.createLanguage(this.myLanguage).then(() => {
      this.myLanguage = new LanguagesModel();
    });
  }

  deleteItem(id?: string) {
    this.languagesService.deleteLanguage(id);
  }
}
