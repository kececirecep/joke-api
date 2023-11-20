import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState();


  const randomJoke = async () => {
    try {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke")
      setJoke(response.data)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    randomJoke()
  }, [])

  return (
    <div className="bg-gray-500 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className='text-3xl'>{joke?.setup}</h1>
      <h1 className='text-2xl'>{joke?.punchline}</h1>
      <button className='bg-blue-600 hover:bg-blue-700 mt-10 text-white font-bold py-2 px-4 rounded' onClick={() => randomJoke()}>Random Joke</button>
    </div>
  );
}

export default App;
