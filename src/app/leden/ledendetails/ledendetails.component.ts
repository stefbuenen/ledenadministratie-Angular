import { Component, OnInit } from '@angular/core';
import { LedenService } from '../../shared/service/leden.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ledendetails',
  templateUrl: './ledendetails.component.html',
  styleUrls: ['./ledendetails.component.css']
})
export class LedendetailsComponent implements OnInit {

  constructor(public ledenService: LedenService) {   }

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
