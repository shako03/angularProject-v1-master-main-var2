import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotels';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-hotel-card',
  standalone : true,
  imports: [RouterLink],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss'
})
export class HotelCardComponent {
  @Input() Hotels!: Hotel;

  // constructor( private rout : ActivatedRoute,
  //   private api : HotelsService
  //   ) { 
  //     this.rout.params.subscribe(data => console.log(data))
  //   }








}
