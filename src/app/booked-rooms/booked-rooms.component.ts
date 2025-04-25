import { Component, Input } from '@angular/core';
import { Hotel } from '../models/hotels';
import { Room } from '../models/rooms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./booked-rooms.component.scss']
})
export class BookedRoomsComponent {
  
  room: Room = new Room();
  imageObject: Array<{ image: string; thumbImage: string }> = [];
singleHotel: any;




   booking = {
    roomID: 0,
    checkInDate: '',
    checkOutDate: '',
    totalPrice: 0,
    isConfirmed: true,
    customerName: '',
    customerId: '',
    customerPhone: ''
  };
  submitBooking() {
    this.booking.roomID = this.room.id ?? 0;

    console.log('Booking submitted:', this.booking);

  }
}