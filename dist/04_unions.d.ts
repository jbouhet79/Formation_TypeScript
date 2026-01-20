/**
 * Exercice 04: Unions
 *
 * Créer deux fonctions:
 *
 * 1. `formatId(id)` :
 *    - id: number | string - l'identifiant
 *    - Accepte soit un number soit un string
 *    - Retourne toujours un string
 *    - Si c'est un nombre, préfixe avec "ID-"
 *    - Si c'est déjà un string, retourne tel quel
 *
 *    Exemple:
 *      formatId(123) => "ID-123"
 *      formatId("ABC") => "ABC"
 *
 * 2. `getUsername(user)` :
 *    - user: { username: string } | null
 *    - Retourne le nom d'utilisateur en MAJUSCULES si user n'est pas null
 *    - Retourne "INVITÉ" si user est null
 *
 *    Exemple:
 *      getUsername({ username: "alice" }) => "ALICE"
 *      getUsername(null) => "INVITÉ"
 */
export type User = {
    username: any;
};
export declare function formatId(id: string | number): string;
export declare function getUsername(user: {
    username: string;
} | null): string;
//# sourceMappingURL=04_unions.d.ts.map