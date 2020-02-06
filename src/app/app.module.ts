import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { DetailContratService } from './detail-contrat.service';
import { BandeauContratComponent } from './bandeau-contrat/bandeau-contrat.component';
import { ListeOffresComponent } from './liste-offres/liste-offres.component';
import { UpgradeOffreComponent } from './upgrade-offre/upgrade-offre.component';
import { MonIconeComponent } from './mon-icone/mon-icone.component';
import { BandeauxComponent } from './bandeaux/bandeaux.component';
import { AboutComponent } from './about/about.component';
import { AdminParametersComponent } from './admin-parameters/admin-parameters.component';
import { MenuComponent } from './menu/menu.component';
import { GestionContratsComponent } from './gestion-contrats/gestion-contrats.component';
import { GestionHotelsComponent } from './gestion-hotels/gestion-hotels.component';
import { GestionShuttlesComponent } from './gestion-shuttles/gestion-shuttles.component';
import { MonIconeSqComponent } from './mon-icone-sq/mon-icone-sq.component';
import { ContratDaoService } from './contrat-dao.service';
import { ShuttleDaoService } from './shuttle-dao.service';
import { HotelDaoService } from './hotel-dao.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, DemoMaterialModule, BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent },
      { path: 'contracts', component: GestionContratsComponent },
      { path: 'details', component: DetailContratComponent },
      { path: 'offres', component: ListeOffresComponent },
      { path: 'upgrade', component: UpgradeOffreComponent },
      { path: 'hotels', component: GestionHotelsComponent },
      { path: 'shuttles', component: GestionShuttlesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'admin', component: AdminParametersComponent },
      ]) ],
  declarations: [ AppComponent, TopBarComponent, GestionContratsComponent, DetailContratComponent, BandeauContratComponent, ListeOffresComponent, UpgradeOffreComponent, MonIconeComponent, BandeauxComponent, AboutComponent, AdminParametersComponent, MenuComponent, GestionHotelsComponent, GestionShuttlesComponent, MonIconeSqComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DetailContratService, ContratDaoService, ShuttleDaoService, HotelDaoService]
})
export class AppModule { 



}
