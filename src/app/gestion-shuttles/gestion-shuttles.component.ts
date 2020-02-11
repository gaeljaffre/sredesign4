import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ShuttleDaoService } from '../shuttle-dao.service';

@Component({
  selector: 'app-gestion-shuttles',
  templateUrl: './gestion-shuttles.component.html',
  styleUrls: ['./gestion-shuttles.component.css']
})
export class GestionShuttlesComponent implements OnInit {

  shuttles;
  formulaireSaisie;

  constructor(
    private shuttleDaoService: ShuttleDaoService,
    private formBuilder: FormBuilder,
  ) {
    this.formulaireSaisie = this.formBuilder.group({
      name: '',
      description: '',
      prixMoyen: '',
      remiseMoyenne: ''
    });
  }

  ngOnInit() {
    this.shuttles = this.shuttleDaoService.getListeShuttles();
  }

  gestionShuttles() {
    window.alert("You do not have enough privileges");
  }

  // TODO à finir
  onSubmit(donnees) {
    //console.warn('Le partenariat a été ajouté', donnees);

    // TODO Mettre dans classe Shuttle
    // TODO cases à cocher "type"

    this.shuttleDaoService.enregistrerNouveauShuttle(donnees);
  }

}