import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule,  } from '@angular/forms';

import { ShuttleDaoService, Shuttle } from '../shuttle-dao.service';

@Component({
  selector: 'app-gestion-shuttles',
  templateUrl: './gestion-shuttles.component.html',
  styleUrls: ['./gestion-shuttles.component.css']
})
export class GestionShuttlesComponent implements OnInit {

  shuttles;
  formulaireSaisie: FormGroup;

  constructor(
    private shuttleDaoService: ShuttleDaoService,
    private formBuilder: FormBuilder,
  ) {
    this.formulaireSaisie = this.formBuilder.group({
      name: '',
      description: '',
      prixMoyen: '',
      remise: '',
      ddv: '01/01/2020',
      dfv: '31/12/2020',
      type: 'rental',
      effacable: true,
    });
  }

  ngOnInit() {
    this.shuttles = this.shuttleDaoService.getListeShuttles();
  }

  gestionShuttles() {
    window.alert("You do not have enough privileges");
  }

  supprimerShuttle(shuttle) {
    this.shuttleDaoService.supprimerShuttle(shuttle);
  }

  // TODO à finir
  onSubmit(donnees: Shuttle) {

    // TODO calendrier pour dates

    if(this.shuttleDaoService.verifierSaisieShuttle(donnees)) {
          this.shuttleDaoService.enregistrerNouveauShuttle(donnees);
          this.formulaireSaisie.reset();
          // TODO remettre "rental" coché
    } else {
      window.alert("Please fill mandatory fields");
    }

  }

}