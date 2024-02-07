// Angular.
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Servicios.
import { GifsService } from 'src/app/core/services/gifs.service';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  constructor(private _gifsService: GifsService) { }

  get history() {
    return this._gifsService.history;
  }

  search(item: string) {
    return this._gifsService.searchGif(item);
  }
}
