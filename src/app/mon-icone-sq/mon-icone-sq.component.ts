import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mon-icone-sq',
  templateUrl: './mon-icone-sq.component.html',
  styleUrls: ['./mon-icone-sq.component.css']
})
export class MonIconeSqComponent implements OnInit {

  @Input() nom;
  @Input() hauteur = 20;
  contenu;

  constructor() { }

  ngOnInit() {

  }
}