import { HashRouter, Routes, Route } from 'react-router'
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </HashRouter>
  )
}

export default App