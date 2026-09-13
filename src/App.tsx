

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import type { PlayerType } from './Type/PlayerType'
import Players from './components/Players/Players'
import { Toaster } from 'react-hot-toast'


// Function to fetch players data from the JSON file using the Fetch API and return a promise that resolves to an array of PlayerType objects.
const playersPromise = async (): Promise<PlayerType[]> => {
  const res = await fetch('/PlayersData.JSON')
  const data = await res.json()
  return data;

}

 const handleClaim = () => {
    // Add your credit-claim logic here.
    alert("Claim button clicked!");
  };

 
function App() {
   const [coin, setCoin] = useState(500);
  
  return (
    <>
    
      <Nav coin={coin}  />
      <Banner  onClaim={handleClaim} />
      <Suspense fallback={<p>Loading ... Players data</p>}>
     <Players playersPromise = {playersPromise()} coin={coin} setCoin={setCoin} />
      </Suspense>

      <Toaster position="top-center" reverseOrder={false} />
      
    
    </>
  )
}

export default App
