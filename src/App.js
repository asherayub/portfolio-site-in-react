import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
