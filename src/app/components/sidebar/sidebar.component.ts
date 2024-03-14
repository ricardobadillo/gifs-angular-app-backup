// Angular.
import { CommonModule, NgFor, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

// Servicios.
import { GifsService } from 'src/app/core/services/gifs.service';



@Component({
  imports: [ NgFor, TitleCasePipe ],
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  gifsService = inject(GifsService);

  get history(): Array<string> {
    return this.gifsService.history;
  }

  search(searchWord: string): void {
    return this.gifsService.searchGif(searchWord);
  }
}
