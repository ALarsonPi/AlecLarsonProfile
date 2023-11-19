import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioPopupComponent } from './components/portfolio-popup/portfolio-popup.component';
import { PortfolioPopup } from '../classes/PortfolioPopup';
import { PortfolioButton } from '../classes/PortfolioButton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioItemComponent, PortfolioPopupComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private foodHeroPopup: PortfolioPopup = {
    title: "Food Hero",
    modalTarget: "portfolioModal1",
    imageUrl: "assets/img/portfolio/foodheroCollage.png",
    imageAltText: "Food Hero Screenshots",
    description: "Recipe and Food Preparation Mobile App built for Oregan State University's non-profit called <i>Foodhero</i>. Converted assets and recipes from their website into a mobile app with dynamic conversions between English and Spanish recipes.",
    links: [
      {
        url: "https://foodhero.org/",
        text: "Original Foodhero Website"
      },
      {
        url: "https://play.google.com/store/apps/details?id=oregonState.app.foodhero",
        text: "See listing on Google Play Store"
      }
    ]
  }
  private foodHeroButton: PortfolioButton = {
    imageAltText: 'Foodhero Logo',
    imageUrl: 'assets/img/portfolio/foodheroImage.png',
    modalTarget: '#' + this.foodHeroPopup.modalTarget
  }

  private goalsAppPopup: PortfolioPopup = {
    title: "Goals Made Real",
    modalTarget: "portfolioModal2",
    imageUrl: "assets/img/portfolio/fullGoalsScreenshotsTransparent.png",
    imageAltText: "Goals Made Real Screenshots",
    description: "Goal Setting and Tracking App that focuses on helping achieve goals according to the your life's priorities. Can break goals into as many (or as few) pieces as needed to best organize your goals. Personal Images can be uploaded, new or different priorities can be added, and there's no limit to goals that can be set and achieved.",
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.creator.goalsApp",
        text: "See Listing on Google Play Store"
      },
      {
        url: "https://github.com/ALarsonPi/goalsApp",
        text: "Github Repo"
      }
    ]
  }
  private goalsAppButton: PortfolioButton = {
    imageAltText: 'Goals App Logo',
    imageUrl: 'assets/img/portfolio/targetTransparent.png',
    modalTarget: '#' + this.goalsAppPopup.modalTarget
  };

  private easyReturnsPopup: PortfolioPopup = {
    title: "Easy Returns",
    modalTarget: "portfolioModal3",
    imageUrl: "assets/img/portfolio/easyReturnsCollageCloseUp.png",
    imageAltText: "Easy Returns Screenshots",
    description: `An app created to help Amazon Prime memebers get their items returned from the comfort of their home. Similar to Grubhub and UberEats, drivers can volunteer to help pickup packages that users request returns for. These drivers recieve the entire tip and a proportion of the price of the return.
    App developed during the Sandbox Hackathon 2022 (12 hour creation event sponsored by the BYU Mariott Business School) See my <a href="https://github.com/ALarsonPi/easyreturns" target="_blank">Github Repo</a> to see the code.`,
    links: [],
  }
  private easyReturnsButton: PortfolioButton = {
    imageAltText: 'Easy Returns',
    imageUrl: 'assets/img/portfolio/easyReturnsLogo.png',
    modalTarget: '#' + this.easyReturnsPopup.modalTarget
  };

  private choreSyncPopup: PortfolioPopup = {
    title: "Synched Chores",
    modalTarget: "portfolioModal4",
    imageUrl: "assets/img/portfolio/actualChoreChart.png",
    imageAltText: "Chore Chart Example Screenshot",
    description: "Chore chart that synchronizes across devices. Family members or roommates can be invited to join a chart so they can all see the same chart which dynamically updates on all devices when changed.",
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.creator.chore_app",
        text: "See listing on Google Play Store"
      },
      {
        url: "https://github.com/ALarsonPi/chores_app",
        text: "Github Repo"
      }
    ],
  }
  private choreSyncButton: PortfolioButton = {
    imageAltText: 'Chore Sync Logo',
    imageUrl: 'assets/img/portfolio/resizedTransparent.png',
    modalTarget: '#' + this.choreSyncPopup.modalTarget
  };

  private redBoxAppPopup: PortfolioPopup = {
    title: "Find the Red Box",
    modalTarget: "portfolioModal5",
    imageUrl: "assets/img/portfolio/redBoxSampleImage.png",
    imageAltText: "Red Box Screenshot",
    description: "A very small and short game that can help young children gain hand-eye coordination skills and practice interacting with different colors. The objective is to find a red square among squares with other colors around it. Each time the user finds and taps the red box, they get a point. The more points you recieve, the harder it is to find the red box. The display above would be around level 50. Global High scores shown after time limit runs out.",
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.redButton.providerexample",
        text: "See Listing on Google Play Store"
      },
      {
        url: "https://github.com/ALarsonPi/redBox",
        text: "Github Repo"
      }
    ],
  }
  private redBoxButton: PortfolioButton = {
    imageAltText: 'Red Box Logo',
    imageUrl: 'assets/img/portfolio/redSquareIcon.png',
    modalTarget: '#' + this.redBoxAppPopup.modalTarget
  };

  private konektPopup: PortfolioPopup = {
    title: "Konekt",
    modalTarget: "portfolioModal6",
    imageUrl: "assets/img/portfolio/konektBanner.png",
    imageAltText: "Konekt Triple Screenshot",
    description: "The Uber of live language translation. Connects skilled translators with immigrants, regugees, and law officials for either on-demand or scheduled video-call live translation sessions.",
    links: [
      {
        url: "https://konekt.app/",
        text: "See the Web Site"
      }
    ],
  }
  private konektButton: PortfolioButton = {
    imageAltText: 'Konekt Logo',
    imageUrl: 'assets/img/portfolio/konekt.png',
    modalTarget: '#' + this.konektPopup.modalTarget
  };

  portfolioPopups: PortfolioPopup[] = [this.foodHeroPopup, this.goalsAppPopup, this.easyReturnsPopup, this.choreSyncPopup, this.redBoxAppPopup, this.konektPopup];
  portfolioButtons: PortfolioButton[] = [this.foodHeroButton, this.konektButton, this.choreSyncButton, this.goalsAppButton, this.redBoxButton, this.easyReturnsButton];
}
