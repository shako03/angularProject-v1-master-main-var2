import { Hotel } from './hotels';

export class Room {
      id?: number;
      name!: string;
      hotelId?: number;
      roomTypeId?: number;
      pricePerNight?: number;
      available?: boolean;
      maximumGuests?: number;
      bookedDates?: {
            id?: number;
            date: string;
            roomId: number;
      }[];
      images?: {
            id?: number;
            source: string;
            roomId?: number;
      }[];
      hotel?: Hotel;

}


