import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Login from './components/Login';
import { Userapp } from './components/Userapp/Userapp';
import NoPage from './components/NoPage';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Userapp/:sender" element={<Userapp/>}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>

  </div>
  );
}

export default App;
