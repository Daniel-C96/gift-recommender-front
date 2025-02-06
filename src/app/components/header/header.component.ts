import { Component } from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [MainButtonComponent, LogoComponent, RouterLink, TranslocoDirective, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
