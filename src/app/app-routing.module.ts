import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';
import { InverterComponent } from './inverter/inverter.component';
import { OthersComponent } from './others/others.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AssistanceComponent } from './assistance/assistance.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  {path: 'home',component:HomeComponent},
  {path: '',component:HomeComponent},
  {path: 'products',component:ProductsComponent},
  {path: 'services',component:ServicesComponent},
  { path: 'bike', component: BikeComponent },
  { path: 'car', component: CarComponent },
  { path: 'inverter', component: InverterComponent },
  { path: 'others', component: OthersComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'assistance', component: AssistanceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
