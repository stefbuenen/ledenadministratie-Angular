import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { LedenComponent } from './leden/leden.component';
import { RollenComponent } from './rollen/rollen.component';
import { VrijwilligersrollenComponent} from './vrijwilligersrollen/vrijwilligersrollen.component';
import { LedenrollenComponent } from './ledenrollen/ledenrollen.component';
import { VogregistratiesComponent } from './vogregistraties/vogregistraties.component';
import { ContributierecordsComponent } from './contributierecords/contributierecords.component';


const routes: Routes = [
  { path: '', redirectTo: '/leden', pathMatch: 'full' },
  { path : 'leden', component : LedenComponent},
  { path : 'ledenrollen', component : LedenrollenComponent},
  { path : 'vrijwilligersrollen', component : VrijwilligersrollenComponent},
  { path : 'contributies', component : ContributierecordsComponent},
  { path : 'rollen', component : RollenComponent},
  { path : 'vogregistraties', component : VogregistratiesComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
//    CommonModule
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
