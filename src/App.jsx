
import { useEffect } from 'react'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'
import Input from './Components/Input'
import { useWeather } from './context/Weather'

function App() {
 
  const weather = useWeather();
  console.log(weather);


  useEffect(() => {
    /// get current location here
    weather.fetchCurrentUserLocationData();
  },[])
  

  return (
    <>
      <h1>Weather Forecast</h1>
      <Input/>
      <Button  onClick={weather.fetchData}
      value="Search"/>
      <Card/>
      <Button value="Refresh"/>

      
    </>

  )
}

export default App
