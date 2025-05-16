import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PostedUser } from '../models/PostUser';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private APPI: ApiService) { }

  getAllHotels() {
    return this.APPI.getAll('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll');
  }

  getHotelById(id: number) {
    return this.APPI.getById('https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel', id);
  }

  getAllRooms() {
    return this.APPI.getAllRooms('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll');
  }

  getRoomById(id: number) {
    return this.APPI.getById('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom', id);
  }

  getRoomTypes() {
    return this.APPI.getRoomType('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes');
  }

  getCities() {
    return this.APPI.getAll('https://hotelbooking.stepprojects.ge/api/Hotels/GetCities');
  }

  getAllBookedRooms() {
    return this.APPI.getAll('https://hotelbooking.stepprojects.ge/api/Booking');
  }

  getRoomFilteredByTypes(obj: any) {
    return this.APPI.getRoomFilteredByType('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', obj);
  }

  PostBooking(obj: any) {
    return this.APPI.UsePostForBooking('https://hotelbooking.stepprojects.ge/api/Booking', obj);
  }

  deleteById(id: number) {
    return this.APPI.DeleteByID('https://hotelbooking.stepprojects.ge/api/Booking', id);
  }

  PostUser(user: PostedUser) {
    return this.APPI.PostRegistration('https://rentcar.stepprojects.ge/api/Users/register', user);
  }

  LoginUser(user: PostedUser) {
    return this.APPI.PostRegistration('https://rentcar.stepprojects.ge/api/Users/login', user);
  }

  

}

