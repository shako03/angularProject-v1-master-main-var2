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
        bookedDates: {
          id?: number;
          date: string;
          roomId: number;
        }
        images: {
          id?: number;
          source: string;
          roomId?: number;
        }
      }
    }
    





// address: "29 Rustaveli Ave, Tbilisi, Tbilisi, 0108"
// city: "Tbilisi"
// featuredImage: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/41cbdcb1.jpg?impolicy=resizecrop&rw=1200&ra=fit"
// id: 1
// name: "The Biltmore Hotel Tbilisi"
// rooms: []