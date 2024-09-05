import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/home_page';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
