// Angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes.
import { AppComponent } from './app.component';

// Módulos.
import { HttpClientModule } from '@angular/common/http';
import { GifsModule } from './gifs/gifs.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,

    SidebarComponent,

    GifsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
