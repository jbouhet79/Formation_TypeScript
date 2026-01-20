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

// TODO: Implémenter fetchUsername

export async function fetchUsername(userId: number): Promise<string> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const user = await response.json()
  return user.username

  throw new Error("Not implemented");
}
const p = fetchUsername(1).then(r => {
  console.log(r)
})

const update = async () => {
  const res = await fetchUsername(2);
  console.log(res)
}
update()