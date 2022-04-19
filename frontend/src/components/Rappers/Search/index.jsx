import { useState } from 'react'
import SearchList from '../SearchList/index'

//Cette fonction est utilisée pour la fonctionnalité de recherche de rappeurs
function Search({ data, selectRapper, chosenRapper }) {
  const [searchField, setSearchField] = useState('')

  //Cette fonction permet d'effectuer une recherche parmis les données passées en props en fonction du champ de recherche
  const filteredRappers = data.filter((rapper) => {
    //On regarde si dans les données passées en props, le champ de recherche correspond à un des rappeurs contenu dans les données
    return rapper.nom.toLowerCase().includes(searchField.toLowerCase())
  })

  //Cette fonction permet de modifier la valeur de la variable searchField en fonction de ce qui est écrit par le maître de jeu
  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    //On appelle le composant SearchList en lui faisant passer en props les données filtrées en fonction de la recherche, la fonction
    //pour sélectionner un rappeur, le rappeur sélectionné et la fonction pour modifier le champ searchField
    <SearchList
      filteredRapper={filteredRappers}
      selectRapper={selectRapper}
      search={handleChange}
      chosenRapper={chosenRapper}
    />
  )
}

export default Search
