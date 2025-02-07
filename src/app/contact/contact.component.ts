import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-contact',
  imports: [TranslocoDirective, NgIcon],
  viewProviders: [provideIcons({ bootstrapLinkedin, bootstrapGithub })],

  templateUrl: './contact.component.html',
})
export class ContactComponent {

}
