import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Navber/Navber'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat/Chat'

function App() {
  const [user] = useAuthState(auth)
  console.log(user);

  return (
    <>
  <Navber></Navber>
  <Chat></Chat>
    </>
  )
}

export default App
