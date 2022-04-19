import { useState, useEffect } from 'react'

import Search from './Search/index'

import { ContainerColumn } from './styles'
import { LoaderWrapper, Loader } from '../../utils/styles/Atoms'

import Redbull from '../../assets/PNG/redbull.png'

//Ce composant correspond au tableau de l'épreuve CrossFeaturing où le maître de jeu peut choisir un crossfeaturing
function CrossFeaturingArray({ selectCrossFeaturing }) {
  const [isDataLoading, setDataLoading] = useState(true)
  const [crossFeaturing, setCrossFeaturing] = useState([])

  //Cette fonction permet d'effectuer le call vers l'API pour récupérer les crossfeaturings
  useEffect(() => {
    fetch(`http://localhost:3001/api/crossfeaturing`)
      .then((response) => response.json())
      .then((requestData) => {
        //On ajoute les données récupérées dans le tableau crossFeaturing
        setCrossFeaturing(requestData)
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
    //Sinon, on appelle le composant Search en lui faisant passer en props les données et la fonction selectCrossFeaturing
    <ContainerColumn>
      <Search
        data={crossFeaturing}
        selectCrossFeaturing={selectCrossFeaturing}
      />
    </ContainerColumn>
  )
}

export default CrossFeaturingArray
