"use strict";
/**
 * Exercice 06: Type Assertion
 *
 * Créer une fonction `parseJsonUser(json)` qui:
 * 1. Parse le JSON passé en paramètre
 * 2. Utilise une assertion de type pour typer le résultat comme `{ name: string, age: number }`
 * 3. Retourne l'objet typé
 *
 * Exemple:
 *   parseJsonUser('{"name": "Alice", "age": 25}') => { name: "Alice", age: 25 }
 *
 * Note: L'assertion de type permet de dire à TypeScript quel type
 * on attend du résultat de JSON.parse (qui retourne `any` par défaut).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJsonUser = parseJsonUser;
const json1 = `{"name": "Alice","age": 25}`;
function parseJsonUser(json) {
    return JSON.parse(json);
    throw new Error("Not implemented");
}
console.log(parseJsonUser('{"name": "Alice", "age": 25}'));
console.log(parseJsonUser(json1));
console.log(JSON.parse(json1));
console.log(typeof JSON.parse(json1).name);
console.log(typeof parseJsonUser(json1).name);
console.log(typeof parseJsonUser(json1).age);
console.log(typeof (JSON.parse(json1).age));
const add = (a, b) => a + b;
const a = JSON.parse(json1).age;
add(a.age, 2);
//# sourceMappingURL=06_assertion.js.map