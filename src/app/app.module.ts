import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './infraestructure/services/countries/countries.service';
import { CountriesGatewayService } from './infraestructure/gateways/countries/countries.gateway.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    CountriesService,
    {
      provide: CountriesService,
      deps: [CountriesGatewayService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
