"use strict";
/**
 * Exercice 03: Narrowing
 *
 * Créer une fonction:
 *
 * `showUserGroup(user, groupName?)` :
 *   - user: string - le nom de l'utilisateur
 *   - groupName?: string - le nom du groupe (optionnel)
 *
 * Vous n'êtes pas sûr de l'existence du groupe de l'utilisateur.
 * Retourner le nom du groupe s'il en possède un, sinon retourner "pas de groupe".
 *
 * Exemple:
 *   showUserGroup("Alice", "Admin") => "Admin"
 *   showUserGroup("Bob") => "pas de groupe"
 *   showUserGroup("Charlie", undefined) => "pas de groupe"
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUserGroup = showUserGroup;
// TODO: Implémenter la fonction
const pers1 = {
    user: "Alice",
    groupName: "admin"
};
function showUserGroup(user, groupName) {
    // return (groupName ? groupName : "pas de groupe");
    return (groupName ?? "pas de groupe");
    throw new Error("Not implemented");
}
console.log(showUserGroup("Alice", "admin"));
console.log(showUserGroup("Bob"));
console.log(showUserGroup("Charlie", undefined));
console.log(showUserGroup(pers1.user));
console.log(showUserGroup(pers1.user, pers1.groupName));
//# sourceMappingURL=03_narrowing.js.map