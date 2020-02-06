import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './contrat-dao.service';

export interface Hotel {
  id: number;
  name: string;
  description: string;
  ddv: string;
  dfv: string;
  prixMoyen: number;
  remise: number;
  type: string;
}

@Injectable()
export class HotelDaoService {

  constructor(
    private http: HttpClient
  ) { }

  getListeHotels(): Hotel[] {
    let liste: Hotel[] = [];

    this.http.get(url + "hotels").subscribe(
      (data: any[]) => {
          if(data.length) {
            for (let hotel of data) {
              liste.push(hotel);
              //console.log("ligne = " + hotel.name);
            }
          }
      }
      , err => {
                console.log("Erreur : " + err.message);
              },
        () => {
          //console.log('completed');
        }
      );
    return liste;
  }

}