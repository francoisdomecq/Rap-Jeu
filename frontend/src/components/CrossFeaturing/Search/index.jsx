import { useState } from 'react'
import SearchList from '../SearchList/index'

//Cette fonction est utilisée pour la fonctionnalité de recherche de crossfeaturings
function Search({ data, selectCrossFeaturing }) {
  const [searchField, setSearchField] = useState('')

  //Cette fonction permet d'effectuer une recherche parmis les données passées en props en fonction du champ de recherche
  const filteredCrossFeaturings = data.filter((crossFeaturing) => {
    return (
      //On regarde si dans les données passées en props, le champ de recherche correspond à un des 'premiers' rappeurs d'un crossfeaturing
      crossFeaturing.rappeur1
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
      //On regarde si dans les données passées en props, le champ de recherche correspond à un des 'seconds' rappeurs d'un crossfeaturing
      crossFeaturing.rappeur2.toLowerCase().includes(searchField.toLowerCase())
    )
    //On retourne ainsi tous les crossfeaturings trouvés en fonction du champ de recherche
  })

  //Cette fonction permet de modifier la valeur de la variable searchField en fonction de ce qui est écrit par le maître de jeu
  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    //On appelle le composant SearchList en lui faisant passer en props les données filtrées en fonction de la recherche, la fonction
    //pour sélectionner un crossFeaturing et la fonction pour modifier le champ searchField
    <SearchList
      filteredCrossFeaturing={filteredCrossFeaturings}
      selectCrossFeaturing={selectCrossFeaturing}
      search={handleChange}
    />
  )
}

export default Search
