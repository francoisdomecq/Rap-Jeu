//Cette fonction permet de générer 4 nombres aléatoires différents
export function generateRandomNumber(length) {
  var array = []
  //Tant que l'on a pas généré 4 nombres, on réitère
  while (array.length < 4) {
    //On génère un nombre aléatoire entre 0 et length
    var random = Math.floor(Math.random() * length) + 1
    //Si le nombre généré n'est pas contenu dans array, on l'ajoute à array
    if (array.indexOf(random) === -1) array.push(random)
  }
  return array
}
