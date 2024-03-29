// Angular.
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modelos.
import { Gif, SearchGifsResponse } from '../models/gifs';

const GIPHY_API_KEY = 'RQBT2gwNdrK1Rp3GKWn6jwAzHSrb8n3b';



@Injectable({ providedIn: 'root' })
export class GifsService {

  private apiBase:     string = 'https://api.giphy.com/v1/gifs';
  private gifsHistory: Array<string> = [];
  public gifs:         Array<Gif> = [];


  constructor(private http: HttpClient) {
    this.gifsHistory = JSON.parse(localStorage.getItem('history')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('images')!) || [];
  }

  get gifHistory(): Array<string> {
    return [ ...this.gifsHistory ];
  }

  public searchGif(textSearch: string): void {

    this.organizeGifHistory(textSearch);
    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', '6')
      .set('q', textSearch);

    this.http.get<SearchGifsResponse>(`${ this.apiBase }/search`, { params }).subscribe({
      next: (response: SearchGifsResponse) => {
        this.gifs = response.data;
        localStorage.setItem('images', JSON.stringify(this.gifs));
      }
    });
  }

  public organizeGifHistory(newGif: string): void {
    newGif = newGif.trim().toLowerCase();

    if (this.gifHistory.includes(newGif)) {
      this.gifsHistory = this.gifsHistory.filter((gif) => gif !== newGif);
    }

    this.gifsHistory.unshift(newGif);
    this.gifsHistory = this.gifsHistory.splice(0, 10);
    localStorage.setItem('history', JSON.stringify(this.gifsHistory));
  }
}
