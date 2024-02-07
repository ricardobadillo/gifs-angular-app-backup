import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { SearchComponent } from './pages/search/search.component';
import { ResultComponent } from './pages/result/result.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
