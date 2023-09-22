import { Link } from 'react-router-dom';
import './ImageInGallery.css';
function ImageInGallery({ src, id }) {
    return (
        <div className="imageIn-wrapper">
            <Link to={`/v1/sample-data/photos/${id}`}>
                <img src={src} />
            </Link>
        </div>
    );
}
export default ImageInGallery;
