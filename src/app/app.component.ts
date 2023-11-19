import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioPopupComponent } from './components/portfolio-popup/portfolio-popup.component';
import { PortfolioLink } from '../classes/PortfolioLink';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioItemComponent, PortfolioPopupComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  foodHeroLinks: PortfolioLink[] = [
    {
      url: "https://foodhero.org/",
      text: "Original Foodhero Website"
    },
    {
      url: "https://play.google.com/store/apps/details?id=oregonState.app.foodhero",
      text: "See listing on Google Play Store"
    }
  ];

  goalsMadeRealLinks: PortfolioLink[] = [
    {
      url: "https://play.google.com/store/apps/details?id=com.creator.goalsApp",
      text: "See Listing on Google Play Store"
    }
  ];

  easyReturnsDescription: string = `
    An app created to help Amazon Prime memebers get their items returned from the comfort of their home. Similar to Grubhub and UberEats, drivers can volunteer to help pickup packages that users request returns for. These drivers recieve the entire tip and a proportion of the price of the return.
    App developed during the Sandbox Hackathon 2022 (12 hour creation event sponsored by the BYU Mariott Business School) See my <a href="https://github.com/ALarsonPi/easyreturns">Github Repo</a> to see the code.
  `;
  easyReturnsLinks: PortfolioLink[] = [];

  choreSyncLinks: PortfolioLink[] = [
    {
      url: "",
      text: "Github Repo"
    },
    {
      url: "",
      text: "See listing on Google Play Store"
    }
  ];

  redBoxLinks: PortfolioLink[] = [
    {
      url: "https://play.google.com/store/apps/details?id=com.redButton.providerexample",
      text: "See Listing on Google Play Store"
    },
    {
      url: "https://apps.apple.com/us/app/red-button-eye-hand-training/id6444263584",
      text: "See Listing on Apple Play Store"
    },
    {
      url: "",
      text: "Github Repo"
    }
  ];

  konektLinks: PortfolioLink[] = [
    {
      url: "https://konekt.app/",
      text: "See the Web Site"
    },
    {
      url: "",
      text: "Github Repo"
    }
  ];

}
