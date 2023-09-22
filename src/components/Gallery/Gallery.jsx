import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageInGallery from '../ImageInGallery/ImageInGallery';
import './Gallery.css';

function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const URL = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
    async function downloadImages() {
        setIsLoading(true);

        const response = await axios.get(URL);
        const data = response.data;
        console.log(data);

        setPhotos(data.photos);
        setIsLoading(false);
    }

    useEffect(() => {
        downloadImages();
    }, [offset]);

    return (
        <div className="gallery-wrapper">
            <div className="flex-wrapper">
                {isLoading ? (
                    <span>Loading....</span>
                ) : (
                    photos.map((photo) => (
                        <ImageInGallery
                            key={photo.id}
                            src={photo.url}
                            id={photo.id}
                        />
                    ))
                )}
            </div>
            <div className="btns">
                <button
                    disabled={offset == 0}
                    onClick={() => setOffset(offset - 20)}>
                    Prev
                </button>
                <button
                    disabled={offset == 120}
                    onClick={() => setOffset(offset + 20)}>
                    Next
                </button>
            </div>
        </div>
    );
}
export default Gallery;
