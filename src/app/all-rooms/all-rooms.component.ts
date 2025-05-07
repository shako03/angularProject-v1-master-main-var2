import { Component, Output, output } from '@angular/core';
import { Room } from '../models/rooms';
import { HotelsService } from '../services/hotels.service';
import { CommonModule } from '@angular/common';
import { RoomsCardComponent } from "../CARDS-HOTEL/rooms-card/rooms-card.component";
import { RoomFilterComponent } from "../room-filter/room-filter.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-rooms',
  imports: [CommonModule, RoomsCardComponent, RoomFilterComponent, FormsModule],
  templateUrl: './all-rooms.component.html',
  styleUrl: './all-rooms.component.scss'
})
export class AllRoomsComponent {

@Output() Rooms: Room[] = [{
  name :''
}];


  // Rooms: Room[] = []

  constructor(private httpRoom: HotelsService, ) { }


  ngOnInit() {
    this.httpRoom.getAllRooms().subscribe((resp: any) => {
      this.renderRoom(resp)
      console.log(resp)
      
    })
  }
  renderRoom(arr: Room[]) {
    this.Rooms = arr;
  }

  filterRoomList(type: any) {
    let postObj = {
      roomTypeId: type,
    }
    this.httpRoom.getRoomFilteredByTypes(postObj).subscribe((resp: any) => {
      this.renderRoom(resp)

    })

  }

  
  priceFrom = 0
  priceTo = 0
  maxGuests = 0
  checkInDate = new Date
  checkInOut = new Date

  filter() {
    this.httpRoom.getRoomFilteredByTypes({
      priceFrom: this.priceFrom,
      priceTo: this.priceTo,
      maxGuests: this.maxGuests,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkInOut
    }).subscribe((resp: any) => {
      this.renderRoom(resp)
      console.log(resp)
    })
  }


  reset() {
    this.priceFrom = 0
    this.priceTo = 0
    this.maxGuests = 0
    this.checkInDate = new Date
    this.checkInOut = new Date
    this.httpRoom.getAllRooms().subscribe((resp: any) => {
      this.renderRoom(resp)
      console.log(resp)
    })

  }



}



  
