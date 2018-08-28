import { Component, OnInit } from '@angular/core';
import { LedenService } from '../../shared/service/leden.service';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../../shared/service/globalService';


@Component({
  selector: 'app-ledendetails',
  templateUrl: './ledendetails.component.html',
  styleUrls: ['./ledendetails.component.css']

})
export class LedendetailsComponent implements OnInit {

  constructor(public ledenService: LedenService, private globalService: GlobalService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(lidForm: NgForm) {
    if (lidForm.value.$key==null) {
      this.ledenService.addLid(lidForm.value);
    } else {
      this.ledenService.updateLid(lidForm.value);
    }
    this.resetForm(lidForm);
  }

  resetForm(lidForm?: NgForm) {
    this.globalService.globalVar= this.globalService.globalVar+1;
    if (lidForm != null) {
      lidForm.reset();
    }
    this.ledenService.selectedLid = {
      id: 0,
      naam:"",
      geslacht:"",
      gebdat: new Date(),
      straat:"",
      huisnummer:"",
      postcode:"",
      woonplaats:"",
      email:"",
      factuurEmail:"",
      mobiel:""
    }
  }

  

}
