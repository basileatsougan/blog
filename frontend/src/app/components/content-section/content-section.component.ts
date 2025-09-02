import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css'
})
export class ContentSectionComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
