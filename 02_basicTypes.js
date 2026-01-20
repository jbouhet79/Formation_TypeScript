"use strict";
/**
 * Exercice 02: Basic Types
 *
 * Créer quatre fonctions:
 *
 * 1. `add(a, b)` : additionne deux nombres et retourne un nombre
 *    Exemple: add(2, 3) => 5
 *
 * 2. `isAdult(age)` : retourne true si l'âge est >= 18, false sinon
 *    Exemple: isAdult(20) => true, isAdult(15) => false
 *
 * 3. `getFullName(firstName, lastName)` : concatène prénom et nom avec un espace
 *    Exemple: getFullName("John", "Doe") => "John Doe"
 *
 * 4. `greet(name?)` : retourne "Hello, {name}!" si un nom est fourni,
 *    ou "Hello!" si aucun nom n'est donné (paramètre optionnel)
 *    Exemple: greet("Alice") => "Hello, Alice!", greet() => "Hello!"
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.isAdult = isAdult;
exports.getFullName = getFullName;
exports.greet = greet;
// TODO: Implémenter les fonctions
function add(a, b) {
    return a + b;
    throw new Error("Not implemented");
}
console.log(add(1, 2));
function isAdult(age) {
    return (age >= 18);
    throw new Error("Not implemented");
}
console.log(isAdult(19));
function getFullName(firstName, lastName) {
    return (`${firstName} ${lastName}`);
    throw new Error("Not implemented");
}
console.log(getFullName("John", "Doe"));
function greet(name) {
    return (name ? `Hello, ${name}!` : "Hello!");
    throw new Error("Not implemented");
}
console.log(greet());
