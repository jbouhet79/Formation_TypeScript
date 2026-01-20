"use strict";
/**
 * Exercice 16: Utility Types - Readonly
 *
 * 1. Définir un type `Config` avec les propriétés suivantes :
 *    - `apiUrl` : string
 *    - `timeout` : number
 *    - `maxRetries` : number
 *
 * 2. Créer un type `ImmutableConfig` en utilisant Readonly
 *    pour rendre toutes les propriétés non modifiables.
 *
 * 3. Créer une fonction `createConfig(apiUrl, timeout, maxRetries)`
 *    qui retourne un objet `ImmutableConfig`.
 *
 * 4. Créer une fonction `validateConfig(config)` qui :
 *    - Prend un `ImmutableConfig`
 *    - Retourne `true` si `timeout > 0` et `maxRetries > 0`, sinon `false`
 *
 * Exemples :
 *   const config = createConfig("https://api.example.com", 5000, 3);
 *   // { apiUrl: "https://api.example.com", timeout: 5000, maxRetries: 3 }
 *
 *   config.timeout = 10000;  // Erreur: Cannot assign to 'timeout' because it is a read-only property
 *
 *   validateConfig(config)  // true
 *
 *   const badConfig = createConfig("https://api.example.com", -100, 0);
 *   validateConfig(badConfig)  // false
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = createConfig;
exports.validateConfig = validateConfig;
function createConfig(apiUrl, timeout, maxRetries) {
    throw new Error("Not implemented");
}
function validateConfig(config) {
    throw new Error("Not implemented");
}
//# sourceMappingURL=16_utilityReadonlyRecord.js.map