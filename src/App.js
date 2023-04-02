import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          {/* we need to put the nav bar component inside the router since it contains links which must be placed inside the routers tag */}
          <Navbar/>
          <Routes>
            <Route
              path="/"
              element={<Home/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
