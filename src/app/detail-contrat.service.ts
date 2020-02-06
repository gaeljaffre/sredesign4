import { Injectable } from '@angular/core';

@Injectable()
export class DetailContratService {

  contrat;

  constructor() { }

  detailContrat(contrat) {
    this.contrat = contrat;
    //window.alert('DetailContratService : ' + this.contrat.name);
  }

  contratCourant() {
    return this.contrat;
  }

}