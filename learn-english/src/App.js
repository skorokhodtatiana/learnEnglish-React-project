import './assets/App.css';
import Header from './components/Header';
import logo from './assets/images/logo.png';




function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
    </div>
  );
}

export default App;
