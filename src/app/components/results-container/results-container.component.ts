import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGift } from '@ng-icons/bootstrap-icons'
import { TranslocoCurrencyPipe } from '@jsverse/transloco-locale';

@Component({
  selector: 'app-results-container',
  imports: [CommonModule, TranslocoDirective, NgIcon, TranslocoCurrencyPipe],
  templateUrl: './results-container.component.html',
  viewProviders: [provideIcons({ bootstrapGift })],

})
export class ResultsContainerComponent {
  @Input() giftRecommendations: any[] = [];

}
