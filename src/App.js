import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home/Home';
import Faculty from './Faculty/Faculty';

function App() {
  return (<>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login component={<Home/>}/>}/>
        <Route path="/Faculty" element={<Login component={<Faculty/>}/>}/>

      </Routes>
      </BrowserRouter>
      </>
    );
}

export default App;
