import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';
import { BlogCardComponent, BlogPost } from '../../components/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HeroComponent, ContentSectionComponent, BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Lancement de Space X',
      description: "Fondée par le visionnaire Elon Musk, cette société a redéfini les règles de l'exploration spatiale, autrefois réservée aux agences gouvernementales. En développant des fusées réutilisables comme le Falcon 9 et en concevant des vaisseaux ...",
      // imageUrl: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      imageUrl: '/assets/images/fusee.jpeg'
    },
    {
      id: 2,
      title: 'Un nouveau Kundalini',
      description: "La thérapie Kundalini a été découverte par Yoga et la tantric. Une fois que vous aurez atteint le Chackra Supérieur, vous aurez le privilège d'entreprendre le voyage de la Transformation Transcendantale. L’Atma Karman Karam",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
}
