import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import CountriesServiceInterface from 'src/app/domain/countries/countries.service.interface';
import { Country } from 'src/app/domain/countries/country.entity';
import { CountryGatewayInterface } from 'src/app/domain/countries/gateway/countries.gateway';

@Injectable({
  providedIn: 'root',
})
export class CountriesService implements CountriesServiceInterface {
  constructor(private countriesGatewayBd: CountryGatewayInterface) {}
  private countries: Country[] | null = null;

  getCountries(): Observable<Country[]> {
    if (this.countries?.length) {
      return new Observable((observer) => {
        observer.next(this.countries || []);
        observer.complete();
      });
    }

    return this.countriesGatewayBd.getAll().pipe(
      tap((countries) => {
        this.countries = countries;
        console.log(
          '🚀 ~ file: countries.service.ts:25 ~ CountriesService ~ tap ~  this.countries:',
          this.countries
        );
      })
    );
  }
}
