import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { urlBackend } from '../config-bd';

@Component({
  selector: 'app-admin-parameters',
  templateUrl: './admin-parameters.component.html',
  styleUrls: ['./admin-parameters.component.css']
})
export class AdminParametersComponent implements OnInit {

  url = urlBackend;
  prodMode = environment.production;

  constructor() { }

  ngOnInit() {
  }

  pasImplemente() {
    window.alert("You don't have enough privileges!");
  }

}