import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
// git remote add origin https://github.com/Mohamadmahgoub910/imageGalleryReactApp1.git
// git push -u origin main
const App = () => {
  // Make useState synced with search input
  const [word, setWord] = useState('');
  // set images for display
  const [images, setImages] = useState([]);
  // Make Handle Submit
  const HandleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word)
    console.log(images);
    // console.log(process.env.REACT_APP_UNSPLASH_KEY)
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images])
        // console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={HandleSearchSubmit} />
    </div>
  );
};

export default App;
