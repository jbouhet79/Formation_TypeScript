
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const arr = [1, 2];
const multiplyByTwo = (tab) => (
  tab.map(i => i * 2)
);
console.log(multiplyByTwo(arr))

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const arr2 = ["Toto", "Titi", "Atoto", "Tata", "atiti", "Atata"];
const filterNameStartByA = (tab, initial) => (
  tab.filter(nom => nom.slice(0, 1) === initial)
)
console.log(filterNameStartByA(arr2,"A"))

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const arr3 = [1, 2, 3]
const sum = (tab) => (
  tab.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);
console.log(sum(arr3))

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const arr4 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' },
  { id: 3, name: 'Foo' },
  { id: 4, name: 'Bar' },
];

const findUserById = (tab, id) => (
  tab.find(e => e.id === id)?.name ?? null
);

console.log(findUserById(arr4, 3))


module.exports = { multiplyByTwo, filterNameStartByA, sum, findUserById };