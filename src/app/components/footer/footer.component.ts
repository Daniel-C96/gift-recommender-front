import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MainButtonComponent } from '../main-button/main-button.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, MainButtonComponent, NgIcon, RouterLink, TranslocoDirective, RouterLinkActive],
  viewProviders: [provideIcons({ bootstrapLinkedin, bootstrapGithub })],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

}
