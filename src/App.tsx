import './App.css';
import NavBar from './components/NavBar';
import StyledInput from './components/StyledInput';

function App() {
  return (
    <>
      <NavBar />
      <div className="centered_flex">
        <StyledInput />
        <StyledInput />
      </div>
      <div className="centered_flex">
        <button className="get_meme_button">Get a new meme image 🖼️</button>
      </div>
      <img src="" />
    </>
  );
}

export default App;
