import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
  title = "Gifty";

  constructor(
    private translocoService: TranslocoService,
    @Inject(DOCUMENT) private document: Document
  ) {
    const browserLang = navigator.language.split('-')[0];
    const availableLangs = translocoService.getAvailableLangs().map(lang => typeof lang === "string" ? lang : lang.id);

    if (availableLangs.includes(browserLang)) {
      translocoService.setActiveLang(browserLang);
      localStorage.setItem("lang", browserLang); // Guarda el idioma en localStorage
    }

    // Set initial lang from Transloco
    this.setDocumentLang(this.translocoService.getActiveLang());

  }

  private setDocumentLang(lang: string) {
    this.document.documentElement.lang = lang;
  }
}
