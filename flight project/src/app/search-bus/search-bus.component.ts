import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Flight } from '../Model/flight';
import { FlightService } from '../Service/flight.service';
import { Router } from '@angular/router';

export interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search-bus mat-table mat-header-cell mat-cell',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  myControl = new FormControl();
  myControl1 = new FormControl();
  
  // mc=this.myControl.value;
  // mc1=this.myControl1.value;
 
temp:number=0;
  options: string[] = [
    'Hyderbad', 'Bangalore', 'Chennai', 'Siddipet', 'Tamilnadu', 'goa', 'Delhi', 'Mumbai',
    'Orissa', 'USA', 'England', 'soudhi arabia', 'Dubai', 'Maharastra', 'pune', 'singapur'
  ]
  cars: Car[] = [
    {value: '1 adult', viewValue: '1 adult'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'}
  ];

  flights: Flight[];
  displayedColumns: string[] = ['position', 'name', 'departureTime','duration','arrivalTime','destination','price'];
  constructor(private flightService: FlightService,private router: Router) { }

  ngOnInit() {
  }
  
  searchFlights(): void {
    let a = this.myControl.value
    let b = this.myControl1.value
    //this.flightService.subject.subscribe(flights => this.flights = flights);
    this.flightService.searchFlight(a, b)
    this.router.navigate(['/flights']);
        

         //console.log(this.flights);
  }
 
swap():void{
  // console.log("mc1:",this.myControl1.value);
  // console.log("mc1:",this.myControl.value);
  // let temp=this.myControl.value;
 // this.temp=this.myControl1.value;
 // this.myControl1.value:=this.temp;
 // this.myControl.value=temp2;

}
}
