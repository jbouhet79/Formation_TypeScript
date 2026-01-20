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
export type HasEmail = {
    email: string;
};
export type HasRole = {
    role: string;
};
export declare function createUser(info: HasEmail & HasRole): string;
//# sourceMappingURL=07_intersection.d.ts.map