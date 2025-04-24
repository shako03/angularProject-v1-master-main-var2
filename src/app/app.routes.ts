import { Routes } from '@angular/router';

export const routes: Routes = [
      { 
            path:"", redirectTo: "Home",pathMatch:'full'
      },

      {
            path:"Home",
            loadComponent:()=>import('./home/home.component').then(m => m.HomeComponent),
            title:"Home"
      },

      {
            path:"Room/:id",
            loadComponent:()=>import('./rooms/rooms.component').then(m => m.RoomsComponent)
      },
      {
            path:"Hotels",
            loadComponent:()=>import('./hotels/hotels.component').then(m => m.HotelsComponent)
      },
      {
            path:"Booked-rooms",
            loadComponent:()=>import('./booked-rooms/booked-rooms.component').then(m => m.BookedRoomsComponent)
      },
      {
            path:"All-rooms",
            loadComponent:() => import('./all-rooms/all-rooms.component').then(m => m.AllRoomsComponent)
      },
      {
            path:"details/:id",
            loadComponent:() => import('./details/details.component').then(m => m.DetailsComponent)
      }
];
