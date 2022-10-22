import Navbar from './components/navbar/Navbar';
import Navhome from './components/navhome/Navhome';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <>
      <header className="App">
        <Navbar />
        <Navhome />

      </header>
      <Router>
      <div>
        <Routes>
          <Route path="/about">
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/">
   
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
