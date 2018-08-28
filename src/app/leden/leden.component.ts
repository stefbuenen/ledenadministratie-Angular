import { Component, OnInit } from '@angular/core';
import { LedenService } from '../shared/service/leden.service';
import { GlobalService } from '../shared/service/globalService';

@Component({
  selector: 'app-leden',
  templateUrl: './leden.component.html',
  styleUrls: ['./leden.component.css'],
  providers:
    [LedenService,
      GlobalService
    ]
})
export class LedenComponent implements OnInit {

  constructor(private ledenService: LedenService,
     private globalService: GlobalService) { }

  ngOnInit() {
  }

}
