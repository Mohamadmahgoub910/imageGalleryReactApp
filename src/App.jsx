import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Search from './components/Search'


const App = () => {
  // Make useState synced with search input 
  const [word, setWord] = useState('');
  // Make Handle Submit 
  const HandleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word)
  }
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={HandleSearchSubmit} />
    </div>
  );
};

export default App;
