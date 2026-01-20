/**
 * Exercice 05: Enumeration
 *
 * 1. Définir une énumération `Color` avec les valeurs:
 *    - Red = "Red"
 *    - Green = "Green"
 *    - Blue = "Blue"
 */

// TODO: Définir l'enum Color et implémenter getColorCode

export enum Color {
  // À compléter
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

/*
 * 2. Créer une fonction `getColorCode(color)` qui retourne le code hexadécimal:
 *    - Color.Red => "#FF0000"
 *    - Color.Green => "#00FF00"
 *    - Color.Blue => "#0000FF"
 *
 * Exemple:
 *   getColorCode(Color.Red) => "#FF0000"
 *   getColorCode(Color.Green) => "#00FF00"
 *   getColorCode(Color.Blue) => "#0000FF"
 */

export function getColorCode(color: Color): string {
  return ( Color.Red === "Red" ? "#FF0000" : Color.Green === "Green" ? "#00FF00" : "#0000FF")
  throw new Error("Not implemented");
}
console.log("Red")
console.log("Blue")
console.log("Green")
