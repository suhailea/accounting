import { Suspense } from 'react';
import routes from '~react-pages';
import './App.css';
import Sidebar from './components/home/Sidebar';

function App() {
  return (
    <div className="bg-slate-700">
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      <Sidebar />
    </div>
  );
}

export default App;
