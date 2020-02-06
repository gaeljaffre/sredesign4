import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { urlBackend } from './config-bd';

export const url = urlBackend;

export interface Contrat {
  id: number;
  name: string;
  description: string;
  country: string;
  type: string;
  gin: string;
  ddv: string;
  dfv: string;
}

export interface Clause {
  idContrat: number;
  ori: string;
  des: string;
  cdr: string;
  farebasis: string;
  cie: string;
  ddv: string;
  dfv: string;
  remise: number;
}

@Injectable()
export class ContratDaoService {

  constructor(
    private http: HttpClient
  ) { }

  getConfigContrats(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(url + "contrats");
  }

  getListeContrats(): Contrat[] {
    let liste: Contrat[] = [];

    this.http.get(url + "contrats").subscribe(
      (data: any[]) => {
          if(data.length) {
            for (let contrat of data) {
              liste.push(contrat);
              //console.log("ligne = " + contrat.name);
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

    getListeClauses(contratId: number): Clause[] {
      let liste: Clause[] = [];

      this.http.get(url + "clauses/" + contratId).subscribe(
        (data: any[]) => {
          if(data.length) {
            for (let clause of data) {
              liste.push(clause);
              //console.log("ligne = " + clause.ori + "-" + clause.des);
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
