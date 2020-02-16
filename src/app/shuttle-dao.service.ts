import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './contrat-dao.service';

export interface Shuttle {
  id: number;
  name: string;
  description: string;
  ddv: string;
  dfv: string;
  prixMoyen: number;
  remise: number;
  type: string;
  effacable: boolean;
}


@Injectable()
export class ShuttleDaoService {

  constructor(
    private http: HttpClient
  ) { }

  getListeShuttles(): Shuttle[] {
    let liste: Shuttle[] = [];

    this.http.get(url + "shuttles").subscribe(
      (data: any[]) => {
          if(data.length) {
            for (let shuttle of data) {
              liste.push(shuttle);
              //console.log("ligne = " + shuttle.name);
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

  enregistrerNouveauShuttle(shuttle: Shuttle) {
    console.warn('type = ', shuttle.type);
    console.warn('ddv = ', shuttle.ddv, ', dfv = ', shuttle.dfv);
    // TODO appel backend
    console.log("post");
    console.warn("shuttle", shuttle);
    this.http.post(url + "shuttles", shuttle).subscribe(
      () => {
            console.log("shuttle: " + shuttle);
      }
      , err => {
                console.log("Erreur : " + err.message);
              },
        () => {
          console.log('completed: ' + shuttle.name);
        }
      );
    console.log('fin: ' + shuttle.name);
  }

}