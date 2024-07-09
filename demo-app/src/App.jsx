
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './Layout/Home'
import Analytics from './Components/Analytics/Analytics'
import AnotherPage from './Components/Analytics/Another'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Analytics/>}/>
          <Route path="analytics" element={<AnotherPage />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
