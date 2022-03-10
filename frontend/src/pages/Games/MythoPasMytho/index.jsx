import { useState, useEffect } from 'react'
import { generateRandomNumber } from '../../../utils/functions/random'
function MythoPasMytho() {
  const [mythoPasMythoData, setData] = useState([])


  const updateData = (value1,value2,value3,value4) => {
    let newData = [...mythoPasMythoData]
    newData.push(value1,value2,value3,value4)
    setData(newData)
  }
  useEffect(() => {
    fetch(`http://localhost:3001/api/mythopasmytho`)
      .then((response) => response.json())
      .then((requestData) => {
        const [n1, n2, n3, n4] = generateRandomNumber(requestData.length)
        updateData(requestData[n1],requestData[n2],requestData[n3],requestData[n4])
      })
      .catch((error) => console.log(error))
  }, [])
  

  return (
    <div>
      <h1>Le Mytho pas Mytho</h1>

      {mythoPasMythoData.map((data) => (
        <div key={data._id}>
          <p>{data.question}</p>
          <p>{data.reponse}</p>
          {data.type === 'video' ? (
            <iframe
              width="560"
              height="315"
              src={data.illustration}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : data.type === 'image' ? (
            <img src={data.illustration} alt="" />
          ) : (
            <a rel="noreferrer" href={data.illustration} target="_blank">
              {data.illustration}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default MythoPasMytho
