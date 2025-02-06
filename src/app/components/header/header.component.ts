import { Component } from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [MainButtonComponent, LogoComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
