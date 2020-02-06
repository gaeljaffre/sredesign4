import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailContratService } from '../detail-contrat.service';
import { ContratDaoService } from '../contrat-dao.service';

@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  //styleUrls: ['./liste-offres.component.css']
  styleUrls: ['../style_vert.scss']
})
export class ListeOffresComponent implements OnInit {

  contrat;
  listeClauses;

  constructor(
    private route: ActivatedRoute,
    private detailContratService: DetailContratService,
    private contratDaoService: ContratDaoService
  ) { }

  ngOnInit() {
    this.contrat = this.detailContratService.contratCourant();
    this.listeClauses = this.contratDaoService.getListeClauses(this.contrat.id);
  }

}