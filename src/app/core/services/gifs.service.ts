// Angular.
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { Gif, SearchGifsResponse } from '../models/gifs';



@Injectable({ providedIn: 'root' })
export class GifsService {

  private _history: Array<string> = [];
  private apiBase: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'RQBT2gwNdrK1Rp3GKWn6jwAzHSrb8n3b';
  public gifs: Array<Gif> = [];


  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('images')!) || [];
  }

  get history(): Array<string> {
    return [ ...this._history ];
  }

  searchGif(textSearch: string): void {
    textSearch = textSearch.trim().toLowerCase();

    if (!this._history.includes(textSearch)) {
      this._history.unshift(textSearch);
      this._history = this._history.splice(0, 9);
      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '6')
      .set('q', textSearch);

    this.http.get<SearchGifsResponse>(`${ this.apiBase }/search`, { params })
      .subscribe({
        next: (response: SearchGifsResponse) => {
          this.gifs = response.data;
          localStorage.setItem('images', JSON.stringify(this.gifs));
        }
      });
  }
}
