import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service Listo');
    
  }


  getQuery( query: string ) {

    const url = `http://localhost:8084/getInfoPersona${ query }`;

    return this.http.get(url);
  }


  getInfopersona( nombre: string , fechaNac: Date) {

  const datepipe: DatePipe = new DatePipe('en-US');
  const formattedDate = datepipe.transform(fechaNac, 'dd-MM-yyyy');

  return this.getQuery(`?nombre=${nombre}&fechaNacimiento=${formattedDate}`);

  }


}
