// Angular.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Módulos.
import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
