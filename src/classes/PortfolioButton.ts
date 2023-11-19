export class PortfolioButton {
  imageAltText: string;
  imageUrl: string;
  modalTarget: string;

  constructor(imageAltText: string, imageUrl: string, modalTarget: string) {
    this.imageAltText = imageAltText;
    this.imageUrl = imageUrl;
    this.modalTarget = modalTarget;
  }
}
