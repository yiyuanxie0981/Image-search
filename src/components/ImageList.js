import './ImageList.css';
import ImageShow from './ImageShow';
import 'bulma/css/bulma.min.css';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          {images.length === 0 ? (
            <div className="column is-12 has-text-centered">
              <p className="is-size-4">Enter a search term to begin!</p>
            </div>
          ) : (
            renderedImages.map((image, index) => (
              <div key={index} className="column is-one-quarter-desktop is-half-tablet">
                {image}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageList;
