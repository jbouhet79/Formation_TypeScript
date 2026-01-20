"use strict";
/**
 * Exercice 13: Promise
 *
 * Créer une fonction `fetchUsername(userId)` qui :
 * - Prend un `userId` de type number
 * - Retourne une `Promise<string>` contenant le nom d'utilisateur
 * - Utilise l'API JSONPlaceholder : https://jsonplaceholder.typicode.com/users/{userId}
 *
 * L'API retourne un objet utilisateur avec une propriété `username`.
 *
 * Exemple:
 *   await fetchUsername(1) => "Bret"
 *   await fetchUsername(2) => "Antonette"
 *
 * Note: Utilisez fetch() ou axios pour effectuer la requête HTTP.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsername = fetchUsername;
// TODO: Implémenter fetchUsername
async function fetchUsername(userId) {
    throw new Error("Not implemented");
}
//# sourceMappingURL=13_promise.js.map