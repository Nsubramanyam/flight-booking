import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flights } from '../Shared/flightdetails';
import { Flight  } from '../Model/Flight';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  temp:Flight[];
  subject = new Subject<Flight[]>();
  newarray:Flight[]
  constructor() { }
  searchFlights(): Observable<Flight[]> {
    // TODO: send the message _after_ fetching the heroes
    
    return of(Flights);

   
  }
  searchFlight(date1:string,date2:string){
    console.log(date1 +"---"+ date2)
    this.newarray = Flights.filter(
      subbu => subbu.source===date1 && subbu.destination === date2);
  }

  getFlights() {
    this. subject.next(this.newarray)
  }
}
