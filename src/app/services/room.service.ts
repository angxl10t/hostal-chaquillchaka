import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room.interface';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private readonly mockRooms: Room[] = [
    {
      _id: '1',
      name: 'Habitación Simple',
      type: 'Simple',
      description: 'Ideal para viajeros solitarios buscando confort.',
      pricePen: 70,
      priceUsd: 20,
      capacity: 1,
      services: ['Baño privado', 'Agua caliente', 'Ropa de cama y toallas'],
      photos: [],
      status: 'available'
    },
    {
      _id: '2',
      name: 'Habitación Doble',
      type: 'Doble',
      description: 'Perfecta para amigos o compañeros de viaje.',
      pricePen: 120,
      priceUsd: 35,
      capacity: 2,
      services: ['Baño privado', 'Agua caliente', 'Ropa de cama y toallas'],
      photos: [],
      status: 'available'
    },
    {
      _id: '3',
      name: 'Habitación Matrimonial',
      type: 'Matrimonial',
      description: 'El espacio ideal para parejas.',
      pricePen: 120,
      priceUsd: 35,
      capacity: 2,
      services: ['Baño privado', 'Agua caliente', 'Ropa de cama y toallas'],
      photos: [],
      status: 'available'
    },
    {
      _id: '4',
      name: 'Habitación Familiar',
      type: 'Familiar',
      description: 'Amplia y cómoda para grupos o familias.',
      pricePen: 180,
      priceUsd: 50,
      capacity: 4,
      services: ['Baño privado', 'Agua caliente', 'Ropa de cama y toallas'],
      photos: [],
      status: 'available'
    }
  ];

  getRooms(): Observable<Room[]> {
    return of(this.mockRooms);
  }

  getCachedRooms(): Room[] {
    return this.mockRooms;
  }

  refreshRooms(): Observable<Room[]> {
    return of(this.mockRooms);
  }

  getRoomById(id: string): Observable<Room> {
    const room = this.mockRooms.find(r => r._id === id);
    if (!room) throw new Error('Not found');
    return of(room);
  }
}
