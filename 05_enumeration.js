"use strict";
/**
 * Exercice 05: Enumeration
 *
 * 1. Définir une énumération `Color` avec les valeurs:
 *    - Red = "Red"
 *    - Green = "Green"
 *    - Blue = "Blue"
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
exports.getColorCode = getColorCode;
// TODO: Définir l'enum Color et implémenter getColorCode
var Color;
(function (Color) {
    // À compléter
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (exports.Color = Color = {}));
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
function getColorCode(color) {
    return (Color.Red === "Red" ? "#FF0000" : Color.Green === "Green" ? "#00FF00" : "#0000FF");
    throw new Error("Not implemented");
}
console.log("Red");
console.log("Blue");
console.log("Green");
