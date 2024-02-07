import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../core/services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {}

  search(texto: string) {
    const gifText = this.txtSearch.nativeElement.value;

    if (gifText.trim().length === 0) {
      return;
    }

    this._gifsService.searchGif(gifText);
    this.txtSearch.nativeElement.value = '';
  }
}
