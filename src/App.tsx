import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { imageArr } from './mocks/apiMock';
function App() {
  const [meme, setMemeState] = useState({
    defaultImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/1200px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg',
    topText: '',
    bottomText: '',
  });

  const randomizeImage = () => {
    const randomNumber = Math.floor(Math.random() * imageArr.length);
    setMemeState((previousState) => {
      const newState = {
        ...previousState,
        defaultImage: imageArr[randomNumber],
      };
      return newState;
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMemeState((previousState) => {
      const newState = {
        ...previousState,
        [name]: value,
      };
      return newState;
    });
  };

  return (
    <>
      <NavBar />
      <div className="centered_flex">
        <input
          onChange={handleInput}
          placeholder="Top text"
          name="topText"
          className="styled_input"
          type="text"
          value={meme.topText}
        />
        <input
          onChange={handleInput}
          placeholder="Bottom text"
          name="bottomText"
          className="styled_input"
          type="text"
          value={meme.bottomText}
        />
      </div>
      <div className="centered_flex">
        <img className="resulting_image" src={meme.defaultImage} />
      </div>
      <div className="centered_flex">
        <button onClick={randomizeImage} className="get_meme_button">
          Get a new meme image 🖼️
        </button>
      </div>
    </>
  );
}

export default App;
