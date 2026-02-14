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

let continuer = true;
while (continuer) {
    const choix = prompt(" Que souhaitez-vous faire ? (1: Ajouter un livre, 2: Afficher les livres, 3: Rechercher un livre, 4: Quitter)");
    
    if (choix === "1") {
        const titre = prompt("Entrez le titre du livre à ajouter :");
        const auteur = prompt("Entrez l'auteur du livre à ajouter :");
        const nouveauLivre = new Livre(titre+"", auteur+"");
        bliblio.ajouterLivre(nouveauLivre);
    } else if (choix === "2") {
        console.log(bliblio.getLivres());
    } else if (choix === "3") {
        const titre = prompt("Entrez le titre du livre à rechercher :");
        const livreTrouve = bliblio.rechercheLivre(titre+"");
        if (livreTrouve) {
            console.log(`Livre trouvé : ${livreTrouve.getTitre()} par ${livreTrouve.getAuteur()}`);
        } else {
            console.log("Livre non trouvé.");
        }
    } else if (choix === "4") {
        continuer = false;
    } else {
        console.log("Choix invalide.");
    }
}

