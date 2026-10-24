import { HashRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      <Footer />
    </HashRouter>
  )
}

export default App