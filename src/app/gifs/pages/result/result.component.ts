import { Component } from '@angular/core';
import { GifsService } from '../../../core/services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {

  get resultados() {
    return this._gifsService.results;
  }

  constructor(private _gifsService: GifsService) { }

}
