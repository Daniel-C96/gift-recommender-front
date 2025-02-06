import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MainButtonComponent } from '../main-button/main-button.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, MainButtonComponent, NgIcon],
  viewProviders: [provideIcons({ bootstrapLinkedin, bootstrapGithub })],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

}
