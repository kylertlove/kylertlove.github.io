import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NasaService {

  nasaKey = 'Koq8Mag9oQnW4I8jOoU92lX4ILYD2DB6e66R8Gs3';
  time:string;
  url:string;
  constructor(private http:HttpClient) { }

   formatDate(date: Date){
    let year = date.getFullYear();
    let month = date.getMonth().toString().length === 1 ? '0' + date.getMonth() : date.getMonth();
    let day = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate();
    this.time =  `${year}-${month}-${day}`;
   }

   getContent(){
    this.url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.time}&api_key=${this.nasaKey}`;
    return this.http.get<any>(this.url);
   }
}
