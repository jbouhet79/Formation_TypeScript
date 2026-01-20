/**
 * Exercice 12: Object With Optional Properties
 *
 * 1. Définir un type `Book` avec les propriétés suivantes :
 *    - `title` : string
 *    - `author` : string
 *    - `publishedYear` : number (optionnel)
 *
 * 2. Créer une fonction `formatBook(book)` qui retourne :
 *    - Si `publishedYear` est présent : "{title} par {author} ({publishedYear})"
 *    - Sinon : "{title} par {author}"
 *
 * Exemple:
 *   formatBook({ title: "1984", author: "George Orwell", publishedYear: 1949 })
 *   => "1984 par George Orwell (1949)"
 *
 *   formatBook({ title: "Le Petit Prince", author: "Saint-Exupéry" })
 *   => "Le Petit Prince par Saint-Exupéry"
 */
export type Book = {};
export declare function formatBook(book: Book): string;
//# sourceMappingURL=12_objectWithOptional.d.ts.map