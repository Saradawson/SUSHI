import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';

function App() {

  return (
    <div className="App" >
      <header>
        <h1 style={{ 
          color: '#F9F6F6',
          fontSize: '7rem',
          }}>
          SUSHI 
        </h1>
      </header>
      <div id='middle-container'>
          <Routes>
            <Route path='/' element={<LoginForm/>}/>  
          </Routes>
      </div>
      <footer>
        <h3 style={{ fontSize: '1rem' }}>
          ©SUSHI
        </h3>
      </footer>
    </div>
  );
}

export default App;
