import { Component, Input } from '@angular/core';
import { Room } from '../../models/rooms';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rooms-card',
  imports: [RouterModule,RouterLink,FormsModule,CommonModule],
  templateUrl: './rooms-card.component.html',
  styleUrl: './rooms-card.component.scss'
})
export class RoomsCardComponent {

@Input() Room!: Room;
 activeClass = "active"
}
