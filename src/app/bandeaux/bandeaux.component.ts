import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeaux',
  templateUrl: './bandeaux.component.html',
  styleUrls: ['./bandeaux.component.css']
})
export class BandeauxComponent implements OnInit {

  initWidth = 7;

  sidenavWidth = this.initWidth;
  ngStyle: string;
  
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = this.initWidth;
  }

  afficherAdmin() {
    window.alert("Sorry, you don't have enough privileges");
  }

  afficherAide() {
    window.alert("Call Natacha at 9-92-96, she can solve anything.\nIf she's not available, call C10.");
  }

}