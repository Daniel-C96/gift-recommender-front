import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, NgIcon, RouterLink, TranslocoDirective, RouterLinkActive],
  viewProviders: [provideIcons({ bootstrapLinkedin, bootstrapGithub })],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

}
