import { useState } from 'react';
import './App.css';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Wrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
export default Wrapper;
