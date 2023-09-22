import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ImageDetails.css';

function ImageDetails() {
    const { id } = useParams();
    const URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;
    const [image, setImage] = useState({});

    async function downloadImageDetails() {
        const response = await axios.get(URL);
        const data = response.data;
        const photoDetails = data.photo;
        setImage({
            description: photoDetails.description,
            title: photoDetails.title,
            url: photoDetails.url,
        });
    }
    useEffect(() => {
        downloadImageDetails();
    }, []);

    return (
        <div className="image-details-wrapper">
            <div className="image-wrapper">
                <img src={image.url} />
            </div>
            <div className="image-des-title">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
            </div>
        </div>
    );
}
export default ImageDetails;
