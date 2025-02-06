import { Component } from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroInformationCircle } from '@ng-icons/heroicons/outline';


@Component({
  selector: 'app-form',
  imports: [MainButtonComponent, NgIcon],
  viewProviders: [provideIcons({ heroInformationCircle })],

  templateUrl: './form.component.html',
})
export class FormComponent {

}
