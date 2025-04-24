import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomFilter } from '../models/room-filter';
import { HotelsService } from '../services/hotels.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Room } from '../models/rooms';
import { FilterCard1Component } from "../CARDS-HOTEL/filter-card1/filter-card1.component";


@Component({
  selector: 'app-room-filter',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, FilterCard1Component],
  templateUrl: './room-filter.component.html',
  styleUrl: './room-filter.component.scss'
})
export class RoomFilterComponent {

  filterRoomArr: any[] = []
  @Output() filterRoomL = new EventEmitter<any>()

  constructor(private httpFilterR: HotelsService) {  }

  ngOnInit(){
    this.httpFilterR.getRoomTypes().subscribe((resp:any) => {
      console.log(resp)
      this.renderRoomTypes(resp)
    })
  }

  renderRoomTypes(arr : any[]){
    this.filterRoomArr = arr
  }

  filterRooms(type : number){
    this.filterRoomL.emit(type)
    console.log("emited" , type)

  }

  // @Input() types!:Room 

}

