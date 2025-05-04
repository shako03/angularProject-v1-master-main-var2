import { BookedRoom } from "./bookedroomsModel";


export class Hotel {
  id?: number;
  name!: string;
  address!: string;
  city!: string;
  featuredImage!: string;


  rooms!: {
    id: number;
    name: string;
    hotelId?: number;
    roomTypeId?: number;
    pricePerNight?: number;
    available: boolean;
    maximumGuests: number;
    bookedDates: BookedRoom[];
    images: {
      id?: number;
      source: string;
      roomId?: number;
    }[];
  }[];
}





