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
      type: 'rental'
    });
  }

  ngOnInit() {
    this.shuttles = this.shuttleDaoService.getListeShuttles();
  }

  gestionShuttles() {
    window.alert("You do not have enough privileges");
  }

  // TODO à finir
  onSubmit(donnees: Shuttle) {
    console.warn('Le partenariat a été ajouté ', donnees);

    // TODO contrôles de saisie
    // TODO bouton supprimer si champ effacable=true
    // TODO calendrier pour dates

    this.shuttleDaoService.enregistrerNouveauShuttle(donnees);
  }

//  name = new FormControl('', [Validators.required, Validators.email]);

//  getErrorMessage() {
//    return this.name.hasError('required') ? 'You must enter a value' :
//        this.name.hasError('email') ? 'Not a valid email' :
//            '';
//  }


}