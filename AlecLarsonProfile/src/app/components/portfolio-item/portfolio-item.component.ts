import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-item.component.html',
})
export class PortfolioItemComponent {
  @Input() imageUrl = "";
  @Input() imageAltText = "...";
  @Input() modalTarget = "";
}
