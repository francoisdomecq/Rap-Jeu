import { useState, useEffect } from 'react'

function RollandGamos() {
  const [rappeur, setRappeurs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/rappeur`)
      .then((response) => response.json())
      .then((requestData) => {
        console.log(requestData)
        setRappeurs(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Rolland Gamos</h1>
      {rappeur.map((rappeur) => (
        <p key={rappeur._id}>{rappeur.nom}</p>
      ))}
    </div>
  )
}

export default RollandGamos
