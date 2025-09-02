import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { BlogCardComponent, BlogPost } from '../../components/blog-card/blog-card.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgFor, BlogCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
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
      // imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      imageUrl: 'https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      title: 'Algorithmes de Google',
      description: "Google a récemment annoncé la mise en œuvre d'un nouveau système de recommandation d'articles. Cette nouvelle approche vise à offrir aux utilisateurs des expériences de lecture plus personnalisées et pertinentes.",
      // imageUrl: 'https://images.unsplash.com/photo-1600783245777-080fd7ff9253?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      title: 'Vie durable et respect de l\'environnement',
      description: "Un dialogue éclairé entre la ville et ses habitants a émergé dans la région toulousaine, insufflant une nouvelle dynamique dans la vie de l'espace public. C'est dans ce contexte qu'est né ce projet ... In reality, there is much more to it.",
      // imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      imageUrl: 'https://images.unsplash.com/photo-1586593794369-c9afd3ee5e12?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      title: 'Stratégie de Marketing Digitale',
      description: "Les techniques de marketing digital sont en constante évolution. Que ce soit la création de contenu, l'optimisation des réseaux sociaux ou la personnalisation des campagnes, chaque étape est essentielle pour atteindre les objectifs marketing.",
      // imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      imageUrl: 'https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      title: 'Voitures électriques et plus de mobilité',
      description: "La transition vers le transport électrique est un enjeu majeur pour demain. Les voitures électriques ne sont plus un luxe, mais un véritable mode de vie. C'est ce que révèle le passé 2024 du magazine Automotive Magazine.",
      // imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      imageUrl: 'https://images.unsplash.com/photo-1617886322009-e02db73a70ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
}
