// Angular.
import { NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

// Servicios.
import { GifsService } from 'src/app/core/services/gifs.service';



@Component({
  imports: [ NgClass, NgFor, TitleCasePipe ],
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  gifsService = inject(GifsService);

  get gifHistory(): Array<string> {
    return this.gifsService.gifHistory;
  }

  searchGif(searchWord: string): void {
    return this.gifsService.searchGif(searchWord);
  }
}
