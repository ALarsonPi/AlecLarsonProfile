import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioPopupComponent } from './components/portfolio-popup/portfolio-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioItemComponent, PortfolioPopupComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'personal-portfolio';
}
