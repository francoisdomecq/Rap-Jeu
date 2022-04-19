import { useState, useEffect } from 'react'

import Search from './Search/index'

import { ContainerColumn } from './styles'
import { LoaderWrapper, Loader } from '../../utils/styles/Atoms'

import Redbull from '../../assets/PNG/redbull.png'

//Ce composant correspond au tableau des épreuves Rolland Gamos et 3 petits chats où le maître de jeu peut choisir un rappeur
function RapperArray({ selectRapper, chosenRapper }) {
  const [rapper, setRappers] = useState([])
  const [isDataLoading, setDataLoading] = useState(true)

  //Cette fonction permet d'effectuer le call vers l'API pour récupérer les rappeurs
  useEffect(() => {
    fetch(`http://localhost:3001/api/rappeur`)
      .then((response) => response.json())
      .then((requestData) => {
        //On ajoute les données récupérées dans le tableau rapper
        setRappers(requestData)
        //On dit que les données ont chargé pour arrêter d'afficher le loader
        setDataLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return isDataLoading ? (
    //Si les données chargent, on affiche le loader
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    //Sinon, on appelle le composant Search en lui faisant passer en props les données, le rappeur sélectionné et la fonction selectRapper
    <ContainerColumn>
      <Search
        data={rapper}
        selectRapper={selectRapper}
        chosenRapper={chosenRapper}
      />
    </ContainerColumn>
  )
}

export default RapperArray
