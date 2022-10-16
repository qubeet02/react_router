import './App.css';
import { Route, Routes} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'
import User from './components/User'
import NotFoundError from './components/NotFoundError'

function App() {
  return (
    <div className="App">
        <Nav />

        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='users/:id' element = { <User/> }/>
          <Route path='users' element={ <Users/> }>
          </Route>
          <Route path='about' element={ <About /> } />
          <Route path='*' element={ <NotFoundError /> } />
        </Routes>
    </div>
  );
}

export default App;
