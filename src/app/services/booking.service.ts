import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Booking, BookingRequest } from '../models/booking.interface';

@Injectable({ providedIn: 'root' })
export class BookingService {
  
  createBooking(request: BookingRequest): Observable<Booking> {
    // Simulamos la respuesta del servidor ya que no hay backend desplegado en GitHub Pages
    const mockBooking: Booking = {
      _id: Math.random().toString(36).substring(2, 9),
      roomId: request.roomId,
      name: request.name,
      email: request.email,
      phone: request.phone,
      checkIn: request.checkIn,
      checkOut: request.checkOut,
      guests: request.guests,
      paymentMethod: request.paymentMethod,
      paymentCurrency: request.paymentCurrency,
      status: 'pending',
      totalPen: 120, // valor simulado
      totalUsd: 35,  // valor simulado
      createdAt: new Date().toISOString()
    };
    
    // Retornamos el observable simulando un poco de retraso de red
    return of(mockBooking).pipe(delay(800));
  }
}
