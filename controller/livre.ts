
export class Livre {
  private titre: string;
  private auteur: string;

  constructor(titre: string, auteur: string) {
    this.titre = titre;
    this.auteur = auteur;
  }

  setTitre(titre: string): void {
    if (titre.trim() == ""){
        throw new Error("Le titre ne peut pas être vide.");
    }
    this.titre = titre;
  }

  setAuteur(auteur: string): void {
    this.auteur = auteur;
  }

  getTitre(): string {
    return this.titre;
  }

  getAuteur(): string {
    return this.auteur;
  }

  
}