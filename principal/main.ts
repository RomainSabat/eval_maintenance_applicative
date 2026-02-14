import { Blibliothèque } from "../controller/blibliothèque.ts";
import { Livre } from "../controller/livre.ts";

const livre1 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
const livre2 = new Livre("1984", "George Orwell");
const livre3 = new Livre("Le Seigneur des Anneaux", "J.R.R. Tolkien");

const bliblio = new Blibliothèque();
bliblio.ajouterLivre(livre1);
bliblio.ajouterLivre(livre2);
bliblio.ajouterLivre(livre3);

console.log(bliblio.getLivres());
console.log(bliblio.rechercheLivre("Le Petit Prince"));


