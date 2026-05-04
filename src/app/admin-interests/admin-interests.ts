import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests';
import { InterestsModel } from '../models/interests/interests.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-interests',
  standalone: false,
  templateUrl: './admin-interests.html',
  styleUrl: './admin-interests.css',
})
export class AdminInterests {
  btntxt: string = "Agregar";
  interestsList: InterestsModel[] = [];
  myInterest: InterestsModel = new InterestsModel();
  
  constructor(public interestsService: InterestsService) {
    this.interestsService.getInterests().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data(), id: c.payload.doc.id })
        )
      )
    ).subscribe(data => {
      this.interestsList = data;
    });
  }

  agregarItem() {
    this.interestsService.createInterest(this.myInterest).then(() => {
      this.myInterest = new InterestsModel();
    });
  }

  deleteItem(id?: string) {
    this.interestsService.deleteInterest(id);
  }
}
