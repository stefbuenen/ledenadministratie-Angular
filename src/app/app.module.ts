import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { LedenComponent } from './leden/leden.component';
import { RollenComponent } from './rollen/rollen.component';
import { LedenrollenComponent } from './ledenrollen/ledenrollen.component';
import { VrijwilligersrollenComponent } from './vrijwilligersrollen/vrijwilligersrollen.component';
import { ContributierecordsComponent } from './contributierecords/contributierecords.component';
import { VogregistratiesComponent } from './vogregistraties/vogregistraties.component';
import { LedenlijstComponent } from './leden/ledenlijst/ledenlijst.component';
import { LedendetailsComponent } from './leden/ledendetails/ledendetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LedenComponent,
    RollenComponent,
    LedenrollenComponent,
    VrijwilligersrollenComponent,
    ContributierecordsComponent,
    VogregistratiesComponent,
    LedenlijstComponent,
    LedendetailsComponent  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
