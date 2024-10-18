import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './fetchAll.css'
const FetchAll = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await axios.get('http://localhost:8080/image/collection');
        setImages(response.data.data);
      } catch (err) {
        setError('Error fetching images');
      } 
    };

    fetchAll();
  }, []);


  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img
              src={`data:${image.filePath};base64,${image.imageData}`}
              alt={image.fileName}
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <p>File Path: {image.filePath}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchAll;
