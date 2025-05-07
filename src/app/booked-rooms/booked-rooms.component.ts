import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelsService } from '../services/hotels.service';
import { BookedRoom } from '../models/bookedroomsModel';
import { RoomsCardComponent } from "../CARDS-HOTEL/rooms-card/rooms-card.component";
import { Room } from '../models/rooms';
import { AllRoomsComponent } from '../all-rooms/all-rooms.component';
@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  imports: [CommonModule, RouterModule, FormsModule, RoomsCardComponent,AllRoomsComponent],
  styleUrls: ['./booked-rooms.component.scss']
})
export class BookedRoomsComponent {
  constructor(private httpBookedRoom: HotelsService,) { }

  @Input() Rooms: Room[] = []; 

  bookedRoomsArr: BookedRoom[] = [];
  ngOnInit() {
    this.httpBookedRoom.getAllBookedRooms().subscribe((resp: any) => {
    
      
      this.renderBookedRooms(resp.filter((room: BookedRoom) => room.totalPrice > 0 && room.isConfirmed ));
      console.log(this.Rooms);
    });
  }

  Room : Room[] = [];
  renderBookedRooms(arr: any[]) {
    this.bookedRoomsArr = arr;

    
  }



  deleteProduct(id: number) {
    this.httpBookedRoom.deleteById(id).subscribe(() => {
        alert('Room Deleted');
        this.bookedRoomsArr = this.bookedRoomsArr.filter(room => room.id !== id);
      }
    );
  }



}












