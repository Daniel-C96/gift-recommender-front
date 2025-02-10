import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { MainButtonComponent } from "../components/main-button/main-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [TranslocoDirective, MainButtonComponent, RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {

}
