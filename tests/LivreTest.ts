import { Livre } from "../controller/livre.ts";

import { assertEquals, assertThrows } from "jsr:@std/assert";

Deno.test("test de création d'un livre", () => {
  const livre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry");
  assertEquals(livre.getTitre(), "Le Petit Prince");
  assertEquals(livre.getAuteur(), "Antoine de Saint-Exupéry");
});

Deno.test("test creation livre avec titre vide", () => {
    assertThrows(() => {
        new Livre("", "Antoine de Saint-Exupéry");
    }, Error);
});