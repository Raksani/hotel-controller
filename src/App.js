import React from 'react'
import StatusBar from './containers/StatusBar';
import ControlPanel from './containers/ControlPanel';
import { GlobalStyles } from './styles/global';
const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <StatusBar />
      <ControlPanel />
    </div>
    
  )
}

export default App

