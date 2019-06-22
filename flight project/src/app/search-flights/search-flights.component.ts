import { Component, OnInit } from '@angular/core';
import { Flight } from '../Model/flight';
import { FlightService } from '../Service/flight.service';
import { Router } from '@angular/router';
import { ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Flights } from '../Shared/flightdetails';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {
 
  dataSource;
  
  flights: Flight[];
  displayedColumns: string[] = [ 'name', 'departureTime','duration','arrivalTime','destination','price'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private flightService: FlightService,private router: Router) { }

  ngOnInit() {
    
    this.flightService.subject.subscribe(flights => this.flights = flights);
    this.flightService.getFlights()
    console.log(this.flights);
    this.dataSource = new MatTableDataSource(this.flights);
    this.dataSource.sort = this.sort;
  }
  book(data): void {
       
      console.log(data)
      this.router.navigate(['/booking',{ id: data.id }]);  
          
    
   

    
  }
 
}
