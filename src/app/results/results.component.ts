import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../models/requests/user-profile';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { ResultsContainerComponent } from "../components/results-container/results-container.component";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  imports: [CommonModule, ResultsContainerComponent]
})
export class ResultsComponent implements OnInit {
  userProfile: UserProfile | null = null;
  giftRecommendations: any[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    // Access history.state after navigation has occurred
    const state = history.state;

    if (state && state['userProfile']) {
      this.userProfile = state['userProfile'];
      console.log('UserProfile:', this.userProfile);
    } else {
      console.error('userProfile is not available. Going to Home.');
      this.router.navigate(["/"])
    }

    this.loading = true;
    this.errorMessage = null;

    // API Call
    this.apiService.sendUserProfile(this.userProfile!).subscribe(
      (data) => {
        console.log('Data received:', data);
        this.giftRecommendations = data;
      },
      (error) => {
        console.error('Error obtaining data', error);
        this.errorMessage = 'Error obtaining recommendations. Please try again later.';

      },
      () => {
        this.loading = false;
      }
    );
  }
}
