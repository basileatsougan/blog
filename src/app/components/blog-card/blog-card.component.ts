import { Component, Input } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() blogPost!: BlogPost;
}
