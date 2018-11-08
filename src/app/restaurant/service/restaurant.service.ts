import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  apiUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient) {
  }

  getRestaurants() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/restaurants').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getRestaurantDetails(id: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/restaurants/' + id + '/').subscribe(data => {
        resolve(data[0]);
      }, err => {
        console.log(err);
      });
    });
  }
}
