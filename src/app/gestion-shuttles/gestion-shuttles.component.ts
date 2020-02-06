import { Component, OnInit } from '@angular/core';

import { ShuttleDaoService } from '../shuttle-dao.service';

@Component({
  selector: 'app-gestion-shuttles',
  templateUrl: './gestion-shuttles.component.html',
  styleUrls: ['./gestion-shuttles.component.css']
})
export class GestionShuttlesComponent implements OnInit {

  shuttles;

  constructor(
    private shuttleDaoService: ShuttleDaoService
  ) { }

  ngOnInit() {
    this.shuttles = this.shuttleDaoService.getListeShuttles();
  }

  gestionShuttles() {
    window.alert("You do not have enough privileges");
  }

}