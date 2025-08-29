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
      title: 'Space X launch',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique.',
      imageUrl: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Modern Interior Design',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique.',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];
}
