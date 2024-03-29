// Angular.
import { Component, ElementRef, ViewChild } from '@angular/core';

// Servicios.
import { GifsService } from 'src/app/core/services/gifs.service';



@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;


  constructor(private gifsService: GifsService) {}

  searchGif(): void {
    let textSearch = this.textSearch.nativeElement.value;

    if (textSearch.trim().length === 0) return;

    this.gifsService.searchGif(textSearch);
    textSearch = '';
  }
}
