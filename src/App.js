import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteHandler from './RouteHandler'

function App() {
  return (
    <div className='App'>
      <Router>
        <RouteHandler />
      </Router>
    </div>
  )
}

export default App
