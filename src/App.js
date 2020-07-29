import React from 'react'
import StatusBar from './containers/StatusBar';
import ControlPanel from './containers/ControlPanel';
import { GlobalStyles } from './styles/global';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <NavBar/>
      <StatusBar />
      <ControlPanel />
    </div>
    
  )
}

export default App

