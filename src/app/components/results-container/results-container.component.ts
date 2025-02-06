import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-container',
  imports: [CommonModule],
  templateUrl: './results-container.component.html',
  styles: ``
})
export class ResultsContainerComponent {
  @Input() giftRecommendations: any[] = [];

}
