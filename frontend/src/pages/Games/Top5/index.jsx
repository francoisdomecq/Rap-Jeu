import { useState, useEffect, useContext } from 'react'
import Score from '../../../components/Score'

function Top5() {
  const [top5, setTop5] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/top5`)
      .then((response) => response.json())
      .then((requestData) => {
        setTop5(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Le top 5 </h1>
      <Score team={'team1'} value={5}/>
      {top5.map((top5) => (
        <p key={top5._id}>
          {top5.theme} {top5.suggestions}
        </p>
      ))}{' '}
      <Score team={'team2'} value={5}/>
    </div>
  )
}

export default Top5
