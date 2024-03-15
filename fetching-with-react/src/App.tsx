import { useEffect, useState } from "react"

const URI_FACTS = 'https://catfact.ninja/fact'
const URI_CATS_IMAGE = 'https://cataas.com/cat/says/'

function App() {
  const [fact, setFact] = useState(['']);
  
  const getFactsData = async () => {
    try {
      const response = await fetch(URI_FACTS)
      const data = await response.json()
      setFact(data.fact.split(' '))
    } catch (error) {
      setFact(['Fail'])
      console.error(error)
    }
  }

  useEffect(() => {
    getFactsData()
  },[])


  return (
    <main style={{display: 'flex', flexDirection:'column', alignItems: 'center', width: '100vw'}}>
    <p>Api de gatos</p>
      {fact.length > 1 
        ? <>
          <p>{fact.join(' ')}</p>
          <img src={`${URI_CATS_IMAGE}${fact[0]}`}></img>
        </>
        : <p>Cargando fact ....</p>
      }
    </main>
  )
}

export default App
