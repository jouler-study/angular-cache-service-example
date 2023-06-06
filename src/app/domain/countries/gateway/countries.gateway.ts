import { Observable } from 'rxjs';
import { Country } from '../country.entity';

export abstract class CountryGatewayInterface {
  getAll(): Observable<Country[]> {
    return new Observable<Country[]>();
  }
}
