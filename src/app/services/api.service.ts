import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders({
      'x-api-key': 'reqres-free-v1'  
    });
  }

  getAll(url: string) {
    return this.http.get(url);
  }

  getById(url: string, id: number) {
    return this.http.get(`${url}/${id}`);
  }

  getAllRooms(url: string) {
    return this.http.get(url);
  }

  getRoomType(url: string) {
    return this.http.get(url);
  }

  getRoomFilteredByType(url: string, obj: any) {
    return this.http.post(url, obj);
  }

  UsePostForBooking(url: string, obj: any) {
    return this.http.post(url, obj);
  }

  DeleteByID(url: string, id: number) {
    return this.http.delete(`${url}/${id}`);
  }

  PostRegistration(url: string, obj: any) {
    return this.http.post(url, obj, { headers: this.getHeaders() });
  }


}
