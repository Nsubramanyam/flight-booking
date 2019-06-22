import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MyMaterialModule } from  './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { MatSortModule } from "@angular/material";
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { RegistrationComponent } from './authentication-module/registration-component/registration.component';
import { LoginComponent } from './authentication-module/login-component/login.component';
import { FlightBookComponent } from './flight-book/flight-book.component';
import { Ng5SliderModule} from 'ng5-slider';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    RegistrationComponent,
    SearchBusComponent,
    SearchFlightsComponent,
    FlightBookComponent,
    SignInComponent,
    SignUpComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSortModule,
    MatTabsModule,
    Ng5SliderModule,
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/', pathMatch: 'full' },
    //   { path: 'register', component: RegistrationComponent },
    //   { path: 'login', component: LoginComponent },
       
     
    // ]),
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
