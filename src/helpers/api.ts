type memeResponse = {
    success: true;
    data: {
      memes: meme[];
    };
  };
  
  type meme = {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
  };
  
  const fetchMemes = async (): Promise<memeResponse> => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    return data.data.memes;
  };
  
  export { fetchMemes };
  