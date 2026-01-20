"use strict";
/**
 * Exercice 15: Utility Types - Pick & Omit
 *
 * 1. Définir un type `Article` avec :
 *    - `id` : number
 *    - `title` : string
 *    - `content` : string
 *    - `author` : string
 *    - `createdAt` : Date
 *    - `updatedAt` : Date
 *
 * 2. Créer un type `ArticlePreview` en utilisant `Pick` pour ne garder que `id`, `title` et `author`.
 *
 * 3. Créer un type `ArticleCreate` en utilisant `Omit` pour exclure `id`, `createdAt` et `updatedAt`.
 *
 * 4. Créer une fonction `toPreview(article)` qui prend un `Article` et retourne un `ArticlePreview`.
 *
 * 5. Créer une fonction `createArticle(data)` qui prend un `ArticleCreate` et retourne un `Article` complet.
 *
 * Exemples :
 *   const article = { id: 1, title: "Hello", content: "World", author: "John", createdAt: new Date(), updatedAt: new Date() };
 *   toPreview(article)  // { id: 1, title: "Hello", author: "John" }
 *
 *   createArticle({ title: "New", content: "Article", author: "Jane" })
 *   // { id: <generated>, title: "New", content: "Article", author: "Jane", createdAt: <now>, updatedAt: <now> }
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPreview = toPreview;
exports.createArticle = createArticle;
// TODO: Implémenter les fonctions
function toPreview(article) {
    throw new Error("Not implemented");
}
function createArticle(data) {
    throw new Error("Not implemented");
}
//# sourceMappingURL=15_utilityPickOmit.js.map