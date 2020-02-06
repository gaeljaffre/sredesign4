import { Component, OnInit } from '@angular/core';

import { DetailContratService } from '../detail-contrat.service';

@Component({
  selector: 'app-upgrade-offre',
  templateUrl: './upgrade-offre.component.html',
  styleUrls: ['./upgrade-offre.component.css']
})
export class UpgradeOffreComponent implements OnInit {

  contrat;

  constructor(
    private detailContratService: DetailContratService
  ) { }

  ngOnInit() {
    this.contrat = this.detailContratService.contratCourant();
  }

  choix1() {
    window.alert('Really? No one wants to travel like this!');
  }

  choix2() {
    window.alert('You love your employees!');
  }

  choix3() {
    window.alert('Good choice! You will travel like a king!');
  }

}