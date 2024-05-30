import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import Section3 from './components/Section3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent/>
        <HeroComponent/>
        <Section3/>
        </header>
    </div>
  );
}

export default App;
