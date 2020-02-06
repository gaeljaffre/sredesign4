import { Component, OnInit } from '@angular/core';

import { HotelDaoService } from '../hotel-dao.service';

@Component({
  selector: 'app-gestion-hotels',
  templateUrl: './gestion-hotels.component.html',
  styleUrls: ['./gestion-hotels.component.css']
})
export class GestionHotelsComponent implements OnInit {

  hotels;

  constructor(
    private hotelDaoService: HotelDaoService
  ) { }

  ngOnInit() {
    this.hotels = this.hotelDaoService.getListeHotels();
  }

  gestionHotels() {
    window.alert("You do not have enough privileges");
  }

}
