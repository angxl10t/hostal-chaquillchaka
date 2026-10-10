import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Booking, BookingRequest } from '../models/booking.interface';

@Injectable({ providedIn: 'root' })
export class BookingService {
  
  createBooking(request: BookingRequest): Observable<Booking> {
    const checkInDate = new Date(request.checkIn);
    const checkOutDate = new Date(request.checkOut);
    const nights = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));
    
    const mockBooking: Booking = {
      id: Math.random().toString(36).substring(2, 9),
      customer: {
        name: request.name,
        email: request.email,
        phone: request.phone
      },
      room: {
        id: request.roomId,
        name: 'Habitación reservada',
        pricePen: 100,
        priceUsd: 30
      },
      checkIn: request.checkIn,
      checkOut: request.checkOut,
      guests: request.guests,
      nights: nights,
      pricePerNightPen: 100,
      totalPen: 100 * nights,
      pricePerNightUsd: 30,
      totalUsd: 30 * nights,
      paymentMethod: request.paymentMethod,
      paymentCurrency: request.paymentCurrency,
      status: 'confirmed'
    };
    
    return of(mockBooking).pipe(delay(800));
  }
}
