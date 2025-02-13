import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideTranslocoLocale } from '@jsverse/transloco-locale'

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
      })

    ),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'es', 'ca'],
        defaultLang: 'en',
        fallbackLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: false,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    provideTranslocoLocale({
      langToLocaleMapping: {
        en: 'en-US',
        es: 'es-ES',
        ca: 'es-ES'
      }
    })
  ]
};
