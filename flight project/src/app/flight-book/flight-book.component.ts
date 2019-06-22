import { Component, OnInit } from '@angular/core';
import {FormArray,FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Flight } from '../Model/flight';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Flights } from '../Shared/flightdetails';

import { Options } from 'ng5-slider';
@Component({
  selector: 'app-flight-book',
  templateUrl: './flight-book.component.html',
  styleUrls: ['./flight-book.component.css']
})
export class FlightBookComponent implements OnInit {
  value: number = 1000;
  highValue:number=10000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
i:number=0;j:number=0;
pr:number=0;
pr1:number=0;
tax:number=1291;
atax:number=0;ctax:number=0
val=3291;
gt:number=0;
message:string=null;

  flight:Flight
  

   constructor(private route: ActivatedRoute) { 
    let id = this.route.snapshot.paramMap.get('id')
    this.flight = Flights.find(flights => flights.id === +id)
    console.log(this.flight.source)

   }

  ngOnInit() {
    
  }
  adultIncrement():void{
    this.i+=1;
    this.pr=this.i*this.val;
    this.atax=this.i*this.tax;
  
 }
 childIncrement():void{
   this.j+=1;
    this.pr1=this.j*this.val;
    this.ctax=this.j*this.tax;
 }
pay():string{
  return this.message="Thanks for using our site.Your payment is successfull";
}
moveToSelectedTab(tabName: string) {
 for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
 if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) 
    {
       (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
    }
  }

}}

