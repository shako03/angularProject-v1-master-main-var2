import { Component } from '@angular/core';
import { Room } from '../models/rooms';
import { HotelsService } from '../services/hotels.service';
import { CommonModule } from '@angular/common';
import { RoomsCardComponent } from "../CARDS-HOTEL/rooms-card/rooms-card.component";
import { RoomFilterComponent } from "../room-filter/room-filter.component";

@Component({
  selector: 'app-all-rooms',
  imports: [CommonModule, RoomsCardComponent, RoomFilterComponent],
  templateUrl: './all-rooms.component.html',
  styleUrl: './all-rooms.component.scss'
})
export class AllRoomsComponent {

  Room: Room[] = []

  constructor(private httpRoom: HotelsService) { }

  ngOnInit() {
    this.httpRoom.getAllRooms().subscribe((resp: any) => {
      this.renderRoom(resp)
      console.log(resp)
    })
  }
  renderRoom(arr: Room[]) {
    this.Room = arr;
  }
   filterRoomList(type : any){
   let  postObj ={
     roomTypeId: type,
   }
   this.httpRoom.getRoomFilteredByTypes(postObj).subscribe((resp:any) => {
    this.renderRoom(resp)

   })
  }
}
