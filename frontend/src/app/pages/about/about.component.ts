import { Component } from '@angular/core';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContentSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
}
