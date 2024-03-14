// Angular.
import { Component } from '@angular/core';

// Componentes.
import { GifsComponent } from './pages/gifs/gifs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [ GifsComponent, SidebarComponent ]
})
export class AppComponent { }
