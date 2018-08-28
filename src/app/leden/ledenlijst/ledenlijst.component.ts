import { Component, OnInit } from '@angular/core';
import { LedenService } from '../../shared/service/leden.service';
import { Lid } from '../../shared/domain/lid.model';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalService } from '../../shared/service/globalService';

@Component({
  selector: 'app-ledenlijst',
  templateUrl: './ledenlijst.component.html',
  styleUrls: ['./ledenlijst.component.css']
})
export class LedenlijstComponent implements OnInit {
  ledenLijst: Lid [];

  constructor(private ledenService: LedenService, private globalService: GlobalService) { }

  ngOnInit() {
    this.getLeden();
    }

  getLeden() : void {
    this.ledenService.findAll()
      .subscribe(leden => this.ledenLijst = leden);
  }

  onEdit(lid: Lid) {
  // this.lidService.selectedLid = lid;  // tegelijkertijd in tabel en in detailformulier updaten
   this.ledenService.selectedLid = Object.assign({}, lid); // een kopie updaten, zodat de lijst niet Direct  wordt bijgewerkt
  }

  onRemove(key: Lid){
    if (confirm('Weet je zeker dat je het lid wil verwijderen?')==true) {
      this.ledenService.deleteLid(key.id).subscribe(
        (lid:Lid) => {
            console.log(lid);
            var index = this.ledenLijst.indexOf(key);
            if(index>=0)
              this.ledenLijst.splice(index, 1);
        },
          
        (error: HttpErrorResponse)  => {
          if(error.status == 404) {
            alert(error.status + " lid " + key.naam + " was al uit de database verwijderd.\n" + error.message);
            var index = this.ledenLijst.indexOf(key);
            if(index>=0)
              this.ledenLijst.splice(index, 1);
          } else {
          alert("Fout bij verwijderen " + error.status);
          console.log("DELETE call in error", error);
          }
        }
      );
    }
  }


}
