import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
TranslocoService

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

  constructor(private translocoService: TranslocoService) {

    const browserLang = navigator.language.split('-')[0]

    const availableLangs = translocoService.getAvailableLangs().map(lang => typeof lang === "string" ? lang : lang.id)

    if (availableLangs.includes(browserLang)) {
      translocoService.setActiveLang(browserLang)
    }

  }
}

