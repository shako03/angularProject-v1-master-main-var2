import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../models/rooms';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(private rout: ActivatedRoute, private APPI: HotelsService, private httpBook: HotelsService) {
    this.rout.params.subscribe(data => this.getSingleroom(data['id']))
  }
  @Input() room!: Room

  singleroom: any = []


  getSingleroom(id: number) {
    this.APPI.getRoomById(id).subscribe((resp: any) => {
      this.singleroom = resp
      console.log(resp)
    })
  }
  Room: Room[] = []
  renderRoom(arr: Room[]) {
    this.Room = arr;
  }

  id= null
  roomID= null
  checkInDate = new Date
  checkOutDate = new Date
  totalPrice = null
  isConfirmed = null
  customerName = null
  customerId = null
  customerPhone = null

  addBookedRoom() {
    this.httpBook.PostBooking({
      roomID: this.id,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      totalPrice: this.totalPrice,
      isConfirmed: true,
      customerName: this.customerName,
      customerId: this.customerId,
      customerPhone: this.customerPhone
    }).subscribe((resp: any) => {
      console.log(resp)
    })
  }



}





