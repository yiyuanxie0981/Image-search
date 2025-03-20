import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import 'bulma/css/bulma.min.css';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div className="app-container has-background-light">
      <div className="main-content">
        <div className="section pt-6">
          <SearchBar onSubmit={handleSubmit} />
        </div>
        <div className="section pt-0">
          <ImageList images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
