import { PortfolioLink } from "./PortfolioLink";

export class PortfolioPopup {
  title: string;
  modalTarget: string;
  imageUrl: string;
  imageAltText: string;
  description: string;
  links: PortfolioLink[];

  constructor(
    title: string,
    modalTarget: string,
    imageUrl: string,
    imageAltText: string,
    description: string,
    links: PortfolioLink[]
  ) {
    this.title = title;
    this.modalTarget = modalTarget;
    this.imageUrl = imageUrl;
    this.imageAltText = imageAltText;
    this.description = description;
    this.links = links;
  }
}
