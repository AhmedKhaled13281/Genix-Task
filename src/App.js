import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Layout/NavBar';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <NavBar>
            <Home />
      </NavBar>
    </div>
  );
}

export default App;
