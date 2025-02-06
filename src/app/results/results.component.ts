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
      console.error('userProfile is not available. Using testUserProfile.');
    }

    this.loading = true;
    this.errorMessage = null;

    // API Call
    // this.apiService.sendUserProfile(this.userProfile!).subscribe(
    //   (data) => {
    //     console.log('Data received:', data);
    //     this.giftRecommendations = data;
    //   },
    //   (error) => {
    //     console.error('Error obtaining data', error);
    //     this.errorMessage = 'Error obtaining recommendations. Please try again later.';
    //   },
    //   () => {
    //     this.loading = false;
    //   }
    // );

    // Hardcode gift recommendations for testing purposes
    this.giftRecommendations = [
      {
        name: "Wireless Bluetooth Headphones",
        price: 80.0,
        description: "Enjoy high-quality audio while working out or commuting.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6wb-QeG26szfKEQ0vYbacMrq_t0WOEjv1Q&s"
      },
      {
        name: "Fitness Tracker",
        price: 50.0,
        description: "Monitor your fitness progress and stay motivated.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6wb-QeG26szfKEQ0vYbacMrq_t0WOEjv1Q&s"
      },
      {
        name: "Sports Water Bottle",
        price: 25.0,
        description: "Stay hydrated during sports activities.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6wb-QeG26szfKEQ0vYbacMrq_t0WOEjv1Q&s"
      },
      {
        name: "Gym Membership",
        price: 40.0,
        description: "Access to various fitness equipment and classes.",
        imageUrl: "no-more-requests.png"
      },
      {
        name: "Portable Bluetooth Speaker",
        price: 60.0,
        description: "Enjoy your favorite music anytime, anywhere.",
        imageUrl: "no-more-requests.png"
      }
    ];
    this.loading = false;


  }
}
