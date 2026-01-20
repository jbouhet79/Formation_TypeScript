"use strict";
/**
 * Exercice 07: Intersection Types
 *
 * 1. Définir deux types:
 *    - `HasEmail` : { email: string }
 *    - `HasRole` : { role: string }
 *
 * 2. Créer une fonction `createUser(info)` où:
 *    - `info` est le type intersection de `HasEmail` et `HasRole`
 *    - Retourne un string formaté: "Utilisateur : {email}, rôle : {role}"
 *
 * Exemple:
 *   createUser({ email: "alice@test.com", role: "admin" })
 *   => "Utilisateur : alice@test.com, rôle : admin"
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
function createUser(info) {
    return (`Utilisateur : ${info.email}, rôle : ${info.role}`);
    throw new Error("Not implemented");
}
console.log(createUser({ email: "alice@test.com", role: "admin" }));
