import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelsService } from '../services/hotels.service';
import { BookedRoom } from '../models/bookedroomsModel';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./booked-rooms.component.scss']
})
export class BookedRoomsComponent {
  constructor(private httpBookedRoom: HotelsService) { }

  bookedRoomsArr:BookedRoom[] = [];
  ngOnInit(){
    this.httpBookedRoom.getAllBookedRooms().subscribe((resp: any) => {
      console.log(resp)
      this.renderBookedRooms(resp);
    });
  }

  renderBookedRooms(arr: any[]) {
    this.bookedRoomsArr = arr;
  }



}












  // room: Room = new Room();
  // imageObject: Array<{ image: string; thumbImage: string }> = [];
  // singleHotel: any;




  // booking = {
  //   roomID: 0,
  //   checkInDate: '',
  //   checkOutDate: '',
  //   totalPrice: 0,
  //   isConfirmed: true,
  //   customerName: '',
  //   customerId: '',
  //   customerPhone: ''
  // };
  // submitBooking() {
  //   this.booking.roomID = this.room.id ?? 0;

  //   console.log('Booking submitted:', this.booking);

  // }