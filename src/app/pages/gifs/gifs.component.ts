// Angular.
import { JsonPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';

// Componentes.
import { SearchComponent } from '../../components/search/search.component';

// Modelos.
import { Gif } from 'src/app/core/models/gifs';

// Servicios.
import { GifsService } from 'src/app/core/services/gifs.service';



@Component({
    imports: [ NgFor, SearchComponent ],
    selector: 'app-gifs',
    standalone: true,
    templateUrl: './gifs.component.html',
})
export class GifsComponent {

  gifsServices = inject(GifsService);

  get results(): Array<Gif> {
    return this.gifsServices.results;
  }
}
