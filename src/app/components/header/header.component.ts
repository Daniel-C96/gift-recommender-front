import { Component } from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionMenu } from '@ng-icons/ionicons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MainButtonComponent, LogoComponent, RouterLink, TranslocoDirective, RouterLinkActive, NgIcon, CommonModule],
  templateUrl: './header.component.html',
  viewProviders: [provideIcons({ ionMenu })],
})
export class HeaderComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
