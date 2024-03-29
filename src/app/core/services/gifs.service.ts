// Angular.
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { Gif, SearchGifsResponse } from '../models/gifs';



@Injectable({ providedIn: 'root' })
export class GifsService {

  private _history: Array<string> = [];
  private apiKey: string = 'RQBT2gwNdrK1Rp3GKWn6jwAzHSrb8n3b';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public results: Array<Gif> = [];

  get history(): Array<string> {
    return [ ...this._history ];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('images')!) || [];
  }

  searchGif(query: string): void {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 9);
      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((respuesta) => {
        this.results = respuesta.data;
        localStorage.setItem('images', JSON.stringify(this.results));
      });
  }
}
