import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (


    <Router>
      <div className="App">
        <Navi/>
        <Container className="main">
          <Dashboard />
          
          
        </Container>

      </div>
    </Router>

  );
}

export default App;
