import Header from './components/Header';
import Profile from './Pages/Profile';
import logo from './assets/logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      {<Profile  userName='Ajoke-Amupitan'  />}
          </div>
  );
}

export default App;
