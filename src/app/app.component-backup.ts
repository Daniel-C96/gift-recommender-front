import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, HeaderComponent, HomeComponent, FooterComponent],
})
export class AppComponent {
  title = "Gift Generator";

  // No inicializamos con valores, dejamos que el usuario los ingrese.
  age: number = null!;
  gender: string = '';
  hobbiesString: string = ''; // Para capturar el input de hobbies como string
  description: string = '';
  maxBudget: number = null!;
  minBudget: number = null!;

  giftRecommendations: any[] = [];

  constructor(private apiService: ApiService) { }

  getRecommendations(): void {
    // Convertimos hobbiesString a un array de hobbies
    const hobbies = this.hobbiesString.split(',').map(hobby => hobby.trim());

    // Creamos un objeto para enviar al backend con los valores actuales
    const userProfile = {
      age: this.age,
      gender: this.gender,
      hobbies: hobbies,  // Usamos el array de hobbies
      description: this.description,
      minBudget: this.minBudget,
      maxBudget: this.maxBudget
    };

    console.log('Enviando solicitud al backend...', userProfile);

    this.apiService.sendUserProfile(userProfile).subscribe(
      (data) => {
        console.log('Datos recibidos:', data);
        this.giftRecommendations = data;
      },
      (error) => {
        console.error('Error al obtener las recomendaciones', error);
      }
    );
  }
}
