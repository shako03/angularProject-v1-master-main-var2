import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotels';

@Component({
  selector: 'app-hotels-city',
  imports: [],
  templateUrl: './hotels-city.component.html',
  styleUrl: './hotels-city.component.scss'
})
export class HotelsCityComponent {
  @Input() City!: Hotel;
}
