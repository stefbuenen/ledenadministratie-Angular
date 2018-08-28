import { Component, OnInit } from '@angular/core';
import { Rol } from '../shared/domain/rol.model';

@Component({
  selector: 'app-rollen',
  templateUrl: './rollen.component.html',
  styleUrls: ['./rollen.component.css'],
})
export class RollenComponent implements OnInit {

  rol : Rol;

  constructor() { }

  ngOnInit() {
    this.rol = new Rol();
    console.log(this.rol);
    this.rol.setNaam("Nieuwe naam");
    console.log(this.rol);
    this.rol = new Rol(2, "Hallo");
    console.log(this.rol);

  }

}
