
export class Livre {
  private _titre! : string;
  private _auteur! : string;

  constructor(titre: string, auteur: string) {
    this.titre = titre;
    this.auteur = auteur;
  }

  set titre(titre: string) {
    if (titre.trim() == ""){
        throw new Error("Le titre ne peut pas être vide.");
    }
    this._titre = titre;
  }

  get titre(): string {
    return this._titre;
  }

  set auteur(auteur: string){
    this._auteur = auteur;
  }
  
  get auteur(): string {
    return this._auteur;
  }

}