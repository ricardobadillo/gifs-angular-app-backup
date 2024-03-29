// Angular.
import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';

// Componentes.
import { GifComponent } from '../gif/gif.component';
import { SearchComponent } from '../search/search.component';

// Modelos.
import { Gif } from 'src/app/core/models/gifs';

// Servicios.
import { GifsService } from 'src/app/core/services/gifs.service';



@Component({
  imports: [ NgFor, GifComponent, SearchComponent ],
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {

  gifsServices = inject(GifsService);

  get results(): Array<Gif> {
    return this.gifsServices.gifs;
  }
}
