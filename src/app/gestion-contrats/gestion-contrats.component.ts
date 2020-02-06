import { Component, OnInit } from '@angular/core';

import { DetailContratService } from '../detail-contrat.service';
import { MonIconeComponent } from '../mon-icone/mon-icone.component';
import { ContratDaoService } from '../contrat-dao.service';

@Component({
  selector: 'app-gestion-contrats',
  templateUrl: './gestion-contrats.component.html',
  styleUrls: ['./gestion-contrats.component.css']
})
export class GestionContratsComponent implements OnInit {

  contractsList;

  constructor(
    private detailContratService: DetailContratService,
    private contratDaoService: ContratDaoService
  ) { }

  ngOnInit() {
    this.contractsList = this.contratDaoService.getListeContrats();
  }

  sauverContratCourant(contrat) {
    this.detailContratService.detailContrat(contrat);
    //window.alert('manage ' + contrat.name);
  }

}