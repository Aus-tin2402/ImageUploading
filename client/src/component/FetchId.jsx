import axios from 'axios';
import React, { useState } from 'react'
import './fetchId.css'
const FetchId = () => {
  const [data, setData] = useState('');
  const [ID, setID] = useState('');
  const [image, setImage] = useState([])

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(`http://localhost:8080/image/collectionByID/${Number(ID)}`)
      setData(response.data.message);
      console.log(data);

      if (response.data.data) {
        setImage(`data:${response.data.data.filePath};base64,${response.data.data.imageData}`)

      } else {
        setImage(``)
      }
    } catch (error) {
      console.log(error);
      setData('Error fetching image.');
      setImage('');
    }
  }

  return (
    <>
      <div className="container">
        <div className="sub-container">
          {data === '' &&
            <form onSubmit={(e) => HandleSubmit(e)}>
              <article className="input-group-feild">
                <label htmlFor="id">Enter Your User ID:</label>
                <input
                  id='id'
                  name='id'
                  type={`text`}
                  placeholder='Enter Your User ID:'
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </article>
              <article className="button">
                <button>Get Image(ID)</button>
              </article>
            </form>
          }{
            data !== '' &&
            <>
              <p>Message : {data}</p>
              <img src={image} alt="Fetched" />
            </>
          }
        </div>
      </div>
    </>
  )
}

export default FetchId