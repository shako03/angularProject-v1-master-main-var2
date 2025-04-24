import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../models/rooms';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone:true,
  imports: [RouterModule, FormsModule, CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor( private rout : ActivatedRoute , private  APPI : HotelsService ){
    this.rout.params.subscribe(data => this.getSingleroom(data['id']))
  }
  @Input() room!:Room
  
  singleroom : any = []
  
  
  getSingleroom(id : number){
      this.APPI.getRoomById(id).subscribe((resp:any) => {
        this.singleroom = resp
        console.log(resp)
      })
    }
  }



