import { Injectable } from '@angular/core';
import { HouseLocation } from '../models/house-location';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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
  houseLocationList$: Observable<HouseLocation[]>;

  constructor(private http: HttpClient) {
     this.URL = environment.URl;
     this.houseLocationList$ = this.getAllHouseLocations();
   }

  getAllHouseLocations(): Observable<HouseLocation[]>{
    return this.http.get<HouseLocation[]>(this.URL);
  }
  getHouseLocationById(id: number): Observable<HouseLocation>{
    return this.http.get<HouseLocation>(`${this.URL}/${id}`);
  }
  submitApplication(values: applicationData){
    console.log(values);
  }
  postHouseLocation(house: HouseDto): Observable<any>{
    return this.http.post<any>(`${this.URL}`, house);
  }
}
