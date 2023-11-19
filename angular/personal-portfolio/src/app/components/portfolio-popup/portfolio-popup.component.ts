import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioLink } from '../../../classes/PortfolioLink';

@Component({
  selector: 'app-portfolio-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-popup.component.html',
})
export class PortfolioPopupComponent {
  @Input() modalTarget = "";
  @Input() title = "";
  @Input() imageUrl = "";
  @Input() imageAltText = "...";
  @Input() description = "";
  @Input() links: PortfolioLink[] = [];
}
