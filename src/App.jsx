import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";

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
    // console.log(word)
    // console.log(images);
    // console.log(process.env.REACT_APP_UNSPLASH_KEY)
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images])
        // console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={HandleSearchSubmit} />
      {/* {!!images.length && <ImageCard image={images[0]} />} */}
      {/* {images.map((image, i) => (
        <ImageCard key={i} image={image} />
      ))} */}
      {/* Make some design to display true */}
      <Container className="mt-4">
        {images.length ? <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className="pd-3">
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))} </Row> : <Welcome />}


      </Container>

    </div>
  );
};

export default App;
