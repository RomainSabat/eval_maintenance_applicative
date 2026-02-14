import { Livre } from "./livre.ts";

export class Blibliothèque {
    private livres: Livre[] = [];

    constructor() {
        this.livres = [];
    }

    ajouterLivre(livre: Livre) : void{
        if (this.rechercheLivre(livre.getTitre()) === null) {
            this.livres.push(livre);
        }
    }

    getLivres(): Livre[] {
        return this.livres;
    }

    rechercheLivre(titre: string): Livre | null {
        for (const livre of this.livres) {
            if (livre.getTitre() === titre) {
                return livre;
            }
        }
        return null;
    }
}