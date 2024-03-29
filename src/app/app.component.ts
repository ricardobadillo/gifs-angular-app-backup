// Angular.
import { Component } from '@angular/core';

// Componentes.
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@Component({
  imports: [ HomeComponent, SidebarComponent ],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent { }
