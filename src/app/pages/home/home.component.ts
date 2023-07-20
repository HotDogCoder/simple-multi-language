import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedLanguage: string = "Spanish";
  photo: string = "../../assets/images/SPN.jpg";
  loading: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    // Puedes inicializar el idioma seleccionado aquí, si lo deseas
    // this.selectedLanguage = 'English'; // o 'Spanish';
  }

  selectLanguage(language: string): void {
    this.loading = true;
    this.selectedLanguage = language;
    if (this.selectedLanguage == 'English') {
      this.photo = "../../assets/images/ING.jpg";
    } else {
      this.photo = "../../assets/images/SPN.jpg";
    }
    this.loading = false;
  }
}
