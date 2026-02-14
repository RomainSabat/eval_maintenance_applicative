export class Livre {
  private titre: string;
  private auteur: string;

  constructor(titre: string, auteur: string) {
    this.titre = titre;
    this.auteur = auteur;
  }

  getTitre(): string {
    return this.titre;
  }

  getAuteur(): string {
    return this.auteur;
  }

  
}