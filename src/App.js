import './App.css';
import { Fragment } from 'react';
import Home from './components/pages/Home';
import Sign from './components/sign/Sign';
import Login from './components/login/Login';
import Dashboard from './components/pages/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Fragment>
    <div className="App" >
      <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/register' element={< Sign/>}></Route>
        <Route exact path='/dashboard' element={< Dashboard />}></Route>
      </Routes>
    </div>
    </Fragment>
    </Router>
  );
}

export default App;
