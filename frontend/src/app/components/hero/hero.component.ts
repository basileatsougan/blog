import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // Single background image approach
  // heroBackgroundImage = '/assets/images/hero-jeans.png';
  
  // Commented out dynamic background options
  /*
  backgroundOptions = [
    '/assets/images/hero-jeans-2.jpeg',
    '/assets/images/hero-soleil.jpeg',
    '/assets/images/hero-jeans.png',
    '/assets/images/hero-soleil2.jpeg',
    '/assets/images/hero-nature.jpeg',
    '/assets/images/hero-voiture.jpeg',
    '/assets/images/hero-voiture2.jpeg'
  ];
  
  currentBackgroundIndex = 0;
  
  changeBackground() {
    this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundOptions.length;
  }
  */
}
