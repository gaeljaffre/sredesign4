import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bandeau-contrat',
  templateUrl: './bandeau-contrat.component.html',
  styleUrls: ['./bandeau-contrat.component.css']
})
export class BandeauContratComponent implements OnInit {

  @Input() contractName;
  @Input() libelleAction;

  constructor() { }

  ngOnInit() {
  }

}