import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { MainButtonComponent } from "../components/main-button/main-button.component";

@Component({
  selector: 'app-about',
  imports: [TranslocoDirective, MainButtonComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {

}
