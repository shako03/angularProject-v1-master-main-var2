import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotels';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotels-city',
  imports: [RouterModule],
  templateUrl: './hotels-city.component.html',
  styleUrl: './hotels-city.component.scss'
})
export class HotelsCityComponent {
  @Input() City!: Hotel;
}
