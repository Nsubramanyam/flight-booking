import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from './authentication-module/login-component/login.component';
import { RegistrationComponent } from './authentication-module/registration-component/registration.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { FlightBookComponent } from './flight-book/flight-book.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';


const routes: Routes = [{ 
  
  path: 'search', component: SearchBusComponent,
},
{
  path:'flights',component:SearchFlightsComponent,
},
{
  path: 'booking', component: FlightBookComponent,
},
{
  path: 'login', component: SignInComponent,
},
{
  path: 'register', component: SignUpComponent,
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
