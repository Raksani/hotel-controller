import React from 'react'
import StatusBar from './containers/StatusBar';
import ControlPanel from './containers/ControlPanel';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div>
      <NavBar/>
      <StatusBar />
      <ControlPanel />
    </div>
    
  )
}

export default App

