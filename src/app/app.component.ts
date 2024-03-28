// Angular.
import { Component } from '@angular/core';

// Componentes.
import { GifsComponent } from './components/gifs/gifs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@Component({
  imports: [ GifsComponent, SidebarComponent ],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent { }
