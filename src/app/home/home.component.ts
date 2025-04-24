import { Component } from '@angular/core';
import { Hotel } from '../models/hotels';
import { CommonModule } from '@angular/common';
import { HotelsService } from '../services/hotels.service';
import { HotelCardComponent } from '../CARDS-HOTEL/hotel-card/hotel-card.component';
import { ErrorDialogComponent } from "../components/error-dialog/error-dialog.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HotelCardComponent, ErrorDialogComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hotelsArr: Hotel[] = [];

  constructor(private httpHotel: HotelsService) { }

  ngOnInit() {
    this.httpHotel.getAllHotels().subscribe((resp:any) => {
      this.renderHotel(resp);
    });
  }

  renderHotel(arr: Hotel[]) {
    this.hotelsArr = arr;
  }
}
