import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import LoadingScreen from "./components/LoadingScreen"
import StarsBackground from "./components/StarsBackground"
import Home from "./pages/Home"
import Events from "./pages/Events"
import "./index.css"

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <LoadingScreen />
      <StarsBackground />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

