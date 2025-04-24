import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { HotelCardComponent } from "../CARDS-HOTEL/hotel-card/hotel-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../models/hotels';
import { HotelInCardComponent } from '../CARDS-HOTEL/hotel-in-card/hotel-in-card.component';
import { IframeComponent } from "../components/iframe/iframe.component";
import { RouterModule } from '@angular/router';
import { HotelsCityComponent } from "../CARDS-HOTEL/hotels-city/hotels-city.component";



@Component({
  selector: 'app-hotels',
  standalone: true,
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
  imports: [CommonModule, FormsModule, HotelInCardComponent, IframeComponent, CommonModule, RouterModule, HotelsCityComponent]
})
export class HotelsComponent {


  hotelsArr: Hotel[] = [];
  citiesArr: any[] = [];

  constructor(private httpHotel: HotelsService) { }

  ngOnInit() {
    this.httpHotel.getAllHotels().subscribe((resp:any) => {
      this.renderHotel(resp);
    });

    this.httpHotel.getCities().subscribe((resp:any) => {
      this.renderCities(resp)
      console.log("cityes" , resp)
    })
  }


  renderCities(arr: any[]) {
    this.citiesArr = arr;
  }

  renderHotel(arr: Hotel[]) {
    this.hotelsArr = arr;
  }
  

}
