import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { fetchMemes } from './helpers/api';

function App() {
  let [imageArr, setImageArr] = useState([]);

  useEffect(() => {
    const memeArray = async () => {
      const memes = await fetchMemes();
      setImageArr(memes);
    };
    memeArray();
  }, []);

  const [meme, setMemeState] = useState({
    defaultImage: '',
    topText: '',
    bottomText: '',
  });
  const randomizeImage = () => {
    const randomNumber = Math.floor(Math.random() * imageArr.length);
    setMemeState((previousState) => {
      const newState = {
        ...previousState,
        defaultImage: imageArr[randomNumber].url,
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
        {/* Let's pretend it actually works properly, although it doesent, i didn't really carea about adding actual text to an image */}
        <h1>{meme.topText}</h1>
        <img className="resulting_image" src={meme.defaultImage} />
        <h1>{meme.bottomText}</h1>
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
