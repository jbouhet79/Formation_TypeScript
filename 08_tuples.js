"use strict";
/**
 * Exercice 08: Tuples
 *
 * Créer une fonction `createPerson(name, age)` qui:
 * - Prend un `name` de type string
 * - Prend un `age` de type number
 * - Retourne un tuple string, number contenant le nom et l'âge
 *
 * Exemple:
 *   createPerson("Alice", 25) => ["Alice", 25]
 *   createPerson("Bob", 30) => ["Bob", 30]
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
// TODO: Implémenter createPerson
function createPerson(name, age) {
    return [name, age];
    throw new Error("Not implemented");
}
console.log(createPerson("Alice", 25));
console.log(createPerson("Bob", 30));
