import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-main-button',
  imports: [NgIcon],
  viewProviders: [provideIcons({ heroArrowRight })],
  templateUrl: './main-button.component.html',
  styles: ``
})
export class MainButtonComponent {
  @Input() buttontext: string = "";
}
