// Angular.
import { NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

// Modelos.
import { Gif } from 'src/app/core/models/gifs';



@Component({
  imports: [ NgIf, NgStyle ],
  selector: 'app-gif',
  standalone: true,
  styleUrl: './gif.component.scss',
  templateUrl: './gif.component.html',
})
export class GifComponent implements OnInit {

  public hasLoaded = false;

  @Input() gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('GifComponent: gif is required');
  }

  public onLoad(): void {
    this.hasLoaded = true;
  }
}
