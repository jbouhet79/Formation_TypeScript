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

// TODO: Définir le type JsonUser et implémenter parseJsonUser

export type JsonUser = { name: string; age: number };

const json1 = `{"name": "Alice","age": 25}`

export function parseJsonUser(json: string): JsonUser {
  const res = JSON.parse(json) as any;

  if (typeof res.name !== "string") throw "erreur name is not a string";
  if (typeof res.age !== "number") throw "erreur, age is not number";

  return JSON.parse(json) as JsonUser
}

console.log(parseJsonUser('{"name": "Alice", "age": 25}'))
console.log(parseJsonUser(json1))
console.log(JSON.parse(json1))
console.log(typeof JSON.parse(json1).name)
console.log(typeof parseJsonUser(json1).name)
console.log(typeof parseJsonUser(json1).age)
console.log(typeof (JSON.parse(json1).age))

const add = (a: number, b: number) => a + b;

const a = JSON.parse(json1);
const b = parseJsonUser(json1);
console.log(add(a.age, b.age));