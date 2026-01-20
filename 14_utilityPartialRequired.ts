/**
 * Exercice 14: Utility Types - Partial & Required
 *
 * 1. Définir un type `UserProfile` avec :
 *    - `username` : string
 *    - `email` : string
 *    - `age` : number
 *    - `bio` : string
 *
 * 2. Créer une fonction `updateProfile(profile, updates)` où :
 *    - `profile` est de type `UserProfile`
 *    - `updates` est de type `Partial<UserProfile>`
 *    - Retourne un nouveau `UserProfile` avec les mises à jour appliquées
 *
 * 3. Créer une fonction `validateCompleteProfile(profile)` qui :
 *    - Prend un `Partial<UserProfile>`
 *    - Retourne `true` si toutes les propriétés sont définies, `false` sinon
 *
 * Exemples :
 *   const profile = { username: "john", email: "john@test.com", age: 25, bio: "Dev" };
 *   updateProfile(profile, { age: 26 })  // { username: "john", email: "john@test.com", age: 26, bio: "Dev" }
 *
 *   validateCompleteProfile({ username: "john" })  // false
 *   validateCompleteProfile(profile)  // true
 */

// TODO: Définir le type UserProfile

export type UserProfile = {
  username: string,
  email: string,
  age: number,
  bio: string
};

const profile = { username: "john", email: "john@test.com", age: 25, bio: "Dev" };

// TODO: Implémenter updateProfile

export function updateProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile {
  const updateProfile = {
    username: updates.username ?? profile.username,
    email: updates.email ??  profile.email,
    age: updates.age ?? profile.age,
    bio: updates.bio ?? profile.bio
  }
  return updateProfile
  // return { ...profile, ...updates };

  throw new Error("Not implemented");
}
console.log(updateProfile(profile, { age: 26 }))

// TODO: Implémenter validateCompleteProfile

export function validateCompleteProfile(profile: Partial<UserProfile>): boolean {
  // return (profile.username !== undefined && profile.email !== undefined && profile.age !== undefined && profile.bio !== undefined) ? true : false
  return (profile.username !== undefined && profile.email !== undefined && profile.age !== undefined && profile.bio !== undefined)
  throw new Error("Not implemented") ;
}
console.log(validateCompleteProfile({ username: "john" }))
console.log(validateCompleteProfile(profile))
