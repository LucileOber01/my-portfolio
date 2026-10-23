import { HashRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App