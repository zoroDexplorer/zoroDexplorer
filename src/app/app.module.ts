import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ThunderComponent } from './thunder/thunder.component';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';
import { InverterComponent } from './inverter/inverter.component';
import { OthersComponent } from './others/others.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { FisHeaderComponent } from './fis-header/fis-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatboxComponent,
    HomeComponent,
    ServicesComponent,
    AboutusComponent,
    ProductsComponent,
    ThunderComponent,
    BikeComponent,
    CarComponent,
    InverterComponent,
    OthersComponent,
    ContactUsComponent,
    AssistanceComponent,
    FisHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
