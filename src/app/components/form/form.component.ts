import { Component } from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroInformationCircle, heroArrowDown, heroArrowUp } from '@ng-icons/heroicons/outline';
import { TranslocoDirective } from '@jsverse/transloco';
import { Hobby } from '../../models/hobby';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { UserProfile } from '../../models/requests/user-profile';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [MainButtonComponent, NgIcon, TranslocoDirective, FormsModule, CommonModule],
  viewProviders: [provideIcons({ heroInformationCircle, heroArrowDown, heroArrowUp })],
  templateUrl: './form.component.html',
})

export class FormComponent {
  showHobbies: boolean = false;
  selectedHobbies: string[] = [];
  hobbies: Hobby[] = [
    { name: 'sports', imageUrl: '/hobbies/sports.png' },
    { name: 'videogames', imageUrl: '/hobbies/videogames.png' },
    { name: 'fitness', imageUrl: '/hobbies/fitness.png' },
    { name: 'art', imageUrl: '/hobbies/art.png' },
    { name: 'cooking', imageUrl: '/hobbies/cooking.png' },
    { name: 'music', imageUrl: '/hobbies/music.png' },
    { name: 'board_games', imageUrl: '/hobbies/board-games.png' },
    { name: 'books', imageUrl: '/hobbies/books.png' },
    { name: 'traveling', imageUrl: '/hobbies/traveling.png' },
    { name: 'photography', imageUrl: '/hobbies/photography.png' },
    { name: 'gardening', imageUrl: '/hobbies/gardening.png' },
    { name: 'fishing', imageUrl: '/hobbies/fishing.png' },
    { name: 'cycling', imageUrl: '/hobbies/cycling.png' },
    { name: 'hiking', imageUrl: '/hobbies/hiking.png' },
    { name: 'cinema', imageUrl: '/hobbies/cinema.png' }
  ];

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  toggleSelection(hobbyName: string) {
    if (this.selectedHobbies.includes(hobbyName)) {
      this.selectedHobbies = this.selectedHobbies.filter(h => h !== hobbyName);
    } else {
      this.selectedHobbies.push(hobbyName);
    }
  }

  isSelected(hobbyName: string): boolean {
    return this.selectedHobbies.includes(hobbyName);
  }

  age: number = null!;
  gender: string = '';
  occasion: string = '';
  who: string = '';
  description: string = '';
  minBudget: number = null!;
  maxBudget: number = null!;

  generateUserProfile(): UserProfile {
    const userProfile: UserProfile = {
      age: this.age,
      gender: this.gender,
      occasion: this.occasion,
      who: this.who,
      hobbies: this.selectedHobbies,
      description: this.description,
      minBudget: this.minBudget,
      maxBudget: this.maxBudget
    };
    console.log(userProfile);
    return userProfile;
  }

  constructor(private router: Router) {
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToResults(): void {
    const userProfile = this.generateUserProfile();
    this.router.navigate(['/results'], {
      state: { userProfile }
    });
    this.scrollToTop()
  }
}
