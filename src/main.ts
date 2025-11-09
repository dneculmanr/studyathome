import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideIonicAngular(),
    provideAnimations(),
    provideLottieOptions({
      player: () => player
    }),
  ],
});
