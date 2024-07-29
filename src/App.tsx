import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import { FetchUrlProvider } from './context/Context'
import Type from './pages/Type/Type'

function App() {

  return (
    <FetchUrlProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/type" element={<Type />} />
      </Routes>
    </BrowserRouter>
    </FetchUrlProvider>
  )
}

export default App
