import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './componets/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home></Home>
    </div>
  );
}

export default App;
