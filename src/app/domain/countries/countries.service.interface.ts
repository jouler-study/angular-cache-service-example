import { Observable } from 'rxjs';
import { Country } from './country.entity';

export default interface CountriesServiceInterface {
  getCountries(): Observable<Country[]>;
}
