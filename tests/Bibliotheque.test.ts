import { Blibliothèque } from "../modele/blibliothèque.ts";

import { assertEquals } from "jsr:@std/assert";
import { Livre } from "../modele/livre.ts";

Deno.test("test de création d'une bibliothèque", () => {
  const bliblio = new Blibliothèque();
  assertEquals(bliblio.getLivres().length, 0);
});

Deno.test("test d'ajout d'un livre", () => {
  const bliblio = new Blibliothèque();
  const livre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
  bliblio.ajouterLivre(livre);
  assertEquals(bliblio.getLivres().length, 1);
});


Deno.test("test d'ajout de livre en double", () => {
  const bliblio = new Blibliothèque();
  const livre1 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
  const livre2 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
  bliblio.ajouterLivre(livre1);
  bliblio.ajouterLivre(livre2);
  assertEquals(bliblio.getLivres().length, 1);  
});

Deno.test("test de recherche d'un livre", () => {
  const bliblio = new Blibliothèque();
  const livre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
  bliblio.ajouterLivre(livre);
  assertEquals(bliblio.rechercheLivre("Le Petit Prince"), livre);
});

Deno.test("test de recherche d'un livre qui n'existe pas", () => {
  const bliblio = new Blibliothèque();
  const livre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
  bliblio.ajouterLivre(livre);
  assertEquals(bliblio.rechercheLivre("1984"), null);
});

Deno.test("test de recherche d'un livre dans une bibliothèque vide", () => {
  const bliblio = new Blibliothèque();
  assertEquals(bliblio.rechercheLivre("Le Petit Prince"), null);
});

Deno.test("test d'affichage de la bibliothèque vide", () => {
  const bliblio = new Blibliothèque();
  console.log = (message: string) => {
    assertEquals(message, "La bibliothèque est vide.");
  };
  bliblio.getLivres();
});