import { Suspense } from 'react';
import routes from '~react-pages';
import './App.css';
import Sidebar from './components/home/Sidebar';
import Navbar from './components/home/Navbar';

function App() {
  return (
    <div className="flex">
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      <Sidebar />
    </div>
  );
}

export default App;
