import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { IGeocoderResult } from '@shared/models/geocoder.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LngLatLike } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private baseGeocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

  constructor(private http: HttpClient) { }

  getGeocoding(address: string): Observable<LngLatLike | undefined> {
    return this.http.get<IGeocoderResult>(`${this.baseGeocodingUrl}/${encodeURI(address)}.json?access_token=${environment.mapbox_access_token}`).pipe(
      map((result: IGeocoderResult) => {
        if (!result.features.length) {
          return undefined;
        }

        return result.features[0].center;
      })
    );
  }
}
