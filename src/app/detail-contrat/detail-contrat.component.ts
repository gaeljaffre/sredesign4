import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailContratService } from '../detail-contrat.service';

@Component({
  selector: 'app-detail-contrat',
  templateUrl: './detail-contrat.component.html',
  //styleUrls: ['./detail-contrat.component.scss']
  styleUrls: ['../style_vert.scss']
})
export class DetailContratComponent implements OnInit {

  contrat = null;

  constructor(
    private route: ActivatedRoute,
    private detailContratService: DetailContratService
  ) { }

  ngOnInit() {
    this.contrat = this.detailContratService.contratCourant();
  }

}
