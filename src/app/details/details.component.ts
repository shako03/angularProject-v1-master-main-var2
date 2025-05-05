import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../models/rooms';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsService
  ) {
    this.route.params.subscribe(params => this.getSingleRoom(params['id']));
  }

  @Input() room!: Room;

  singleroom: any = {};

  roomID: number | null = null;
  checkInDate: string = '';
  checkOutDate: string = '';
  totalPrice: number | null = null;
  isConfirmed: boolean = true;
  customerName: string = '';
  customerId: string = '';
  customerPhone: string = '';

  Room: Room[] = [];

  getSingleRoom(id: number) {
    this.roomID = id;
    this.hotelService.getRoomById(id).subscribe((resp: any) => {
      this.singleroom = resp;
      console.log('Room Details:', resp);
    });
  }

  renderRoom(arr: Room[]) {
    this.Room = arr;
  }

  addBookedRoom() {


    const bookingPayload = {
      roomID: this.roomID,
      checkInDate: new Date(this.checkInDate).toISOString(),
      checkOutDate: new Date(this.checkOutDate).toISOString(),
      isConfirmed: this.isConfirmed,
      customerName: this.customerName,
      customerId: this.customerId,
      customerPhone: this.customerPhone
    };

    console.log('Booking Payload:', bookingPayload);

    this.hotelService.PostBooking(bookingPayload).subscribe({
      next: (resp: any) => {
        console.log('Booking successful:', resp);
      },
      error: (err) => {
        console.error('Booking failed:', err);
      }
    });
  }
  succes(){
    alert('Booking successful');
  }
}


