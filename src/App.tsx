import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./containers"
import { Navbar } from './components';
import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <Router>
        <main className="dark text-foreground bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </NextUIProvider>
  );
}

export default App;
