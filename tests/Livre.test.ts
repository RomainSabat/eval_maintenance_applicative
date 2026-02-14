import { Livre } from "../modele/livre.ts";

import { assertEquals, assertThrows } from "jsr:@std/assert";

Deno.test("test de création d'un livre", () => {
  const livre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
  assertEquals(livre.titre, "Le Petit Prince");
  assertEquals(livre.auteur, "Antoine de Saint-Exupéry");
});

Deno.test("test creation livre avec titre vide", () => {
    assertThrows(() => {
        new Livre("", "Antoine de Saint-Exupéry");
    }, Error, "Le titre ne peut pas être vide.");
});