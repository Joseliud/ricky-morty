import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './Hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './componentes/LocationInfo'
import ResidentsCard from './componentes/ResidentsCard'
import FormSerch from './componentes/FormSerch'

function App() {

  const randomlocation = getRandomNumber(126)
  const [locationSelect, setlocationSelect] = useState(randomlocation)

 
  const url =`https://rickandmortyapi.com/api/location/${locationSelect || getRandomNumber(126)}`
 const [ location, getlocation, hasError] = useFetch(url)

 useEffect(() => {
    getlocation() 
 }, [locationSelect])

  return (
    <div className='app'>
      <h1 className='app_title'>Ricky and Morty</h1>
      <FormSerch 
        setlocationSelect={setlocationSelect}
        />
        {
          hasError
          ? <h2 className='app_error'>Hey! You must provide an id from 1 to 126😢 </h2>
          :(   <> <LocationInfo
       location={location}
      />
      <div className='container_resident'>
         {
          location?.residents.map(url => (
            <ResidentsCard 
            key={url}
            url={url}
            />
          ))
         }
      </div>
        </>
          )
        }
  
    </div>
  )
}

export default App
