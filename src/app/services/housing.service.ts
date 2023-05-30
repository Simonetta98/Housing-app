import { Injectable } from '@angular/core';
import { HouseLocation } from '../models/house-location';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HouseDto } from '../models/houseDTO';

interface applicationData {
  firstName: string,
  lastName: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  URL: string;
  private _houseLocationSubject = new BehaviorSubject<HouseLocation[]>([]);
  houseLocationList$ = this._houseLocationSubject.asObservable();

  constructor(private http: HttpClient) {
     this.URL = environment.URl;
   }

   get houseLocationSubject(){
    return this._houseLocationSubject;
   }

  getAllHouseLocations(){
    return this.http.get<HouseLocation[]>(this.URL)
           .subscribe(data=> this._houseLocationSubject.next(data));
  }
  getHouseLocationById(id: number): Observable<HouseLocation>{
    return this.http.get<HouseLocation>(`${this.URL}/${id}`);
  }
  //TODO
  submitApplication(values: applicationData){
    console.log(values);
  }
  postHouseLocation(house: HouseDto): Observable<HouseLocation>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.post<HouseLocation>(`${this.URL}`, house, { 'headers': headers });
  }
  deleteHouseLocation(id: number): Observable<void>{
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
  getHouseList() {
    return this.houseLocationList$;
  }
  updateSource(newData: HouseLocation[]) {
    this._houseLocationSubject.next(newData);
  }
}
