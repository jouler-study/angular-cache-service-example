import { Component } from '@angular/core';
import { CountriesService } from './infraestructure/services/countries/countries.service';
import { CountriesGatewayService } from './infraestructure/gateways/countries/countries.gateway.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-cache-service-example';
  countries: any[] = [];

  constructor(private countriesService: CountriesService) {
    console.log('AppComponent');
  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }

  callEgame() {
    console.log('callEgame');
    this.countriesService.getCountries().subscribe((countries) => {
      console.log(
        '🚀 ~ file: app.component.ts:29 ~ AppComponent ~ this.countriesService.getCountries ~ countries:',
        countries
      );
      this.countries = countries;
    });
  }
}
