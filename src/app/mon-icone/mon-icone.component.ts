import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mon-icone',
  templateUrl: './mon-icone.component.html',
  styleUrls: ['./mon-icone.component.css']
})
export class MonIconeComponent implements OnInit {

  @Input() nomFichier;
  @Input() hauteur = 24;
  @Input() largeur = 24;

  constructor() { }

  ngOnInit() {
    switch(this.nomFichier) {
      case "plane":
        this.nomFichier="/assets/plane.svg";
        this.largeur = 32;
        break;
      case "surf":
        this.nomFichier="/assets/surf.svg";
        break;
      case "contrat": 
        this.nomFichier="/assets/contrat.svg";
        break;
      case "pirate1":
        this.largeur = 150;
        this.hauteur = 200;
        this.nomFichier="/assets/pirate1.svg";
        break;
      default: this.nomFichier="/assets/" + this.nomFichier;
        //window.alert('fichier : ' + this.nomFichier);
      break;
    }
  }

}