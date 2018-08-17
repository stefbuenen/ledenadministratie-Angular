import { Component, OnInit } from '@angular/core';
import { LedenService } from '../shared/service/leden.service';

@Component({
  selector: 'app-leden',
  templateUrl: './leden.component.html',
  styleUrls: ['./leden.component.css'],
  providers: [LedenService]
})
export class LedenComponent implements OnInit {

  constructor(private ledenService: LedenService) { }

  ngOnInit() {
  }

}
