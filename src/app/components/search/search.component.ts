// Angular.
import { Component, ElementRef, ViewChild } from '@angular/core';

// Servicios.
import { GifsService } from 'src/app/core/services/gifs.service';



@Component({
    selector: 'app-search',
    standalone: true,
    styles: [],
    templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search(texto: string): void {
    const gifText = this.txtSearch.nativeElement.value;

    if (gifText.trim().length === 0) {
      return;
    }

    this.gifsService.searchGif(gifText);
    this.txtSearch.nativeElement.value = '';
  }
}
