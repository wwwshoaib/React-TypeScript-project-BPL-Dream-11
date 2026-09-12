

import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Players from './components/Players/Players'
import type { PlayerType } from './Type/PlayerType'

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
  return (
    <>
      <Nav />
      <Banner  onClaim={handleClaim} />
      <Suspense fallback={<p>Loading ... Players data</p>}>
      <Players playersPromise = {playersPromise()} ></Players>

      </Suspense>
    </>
  )
}

export default App
