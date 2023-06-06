import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/domain/countries/country.entity';
import { CountryGatewayInterface } from 'src/app/domain/countries/gateway/countries.gateway';

@Injectable({
  providedIn: 'root',
})
export class CountriesGatewayService extends CountryGatewayInterface {
  constructor(private http: HttpClient) {
    super();
  }

  override getAll(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
  }
}
