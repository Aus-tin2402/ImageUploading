import axios from 'axios';
import React, { useState } from 'react'
import './update.css'
const Update = () => {
  const [data, setData] = useState('');
  const [ID, setID] = useState('');
  const [file, setFile] = useState('');

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)
    try {
      let response = await axios.put(`http://localhost:8080/image/updateImage/${Number(ID)}`, formData)
      setData(response.data.message);

    } catch (error) {
      console.log(error);

    }

  }

  return (
    <>
      <div className="container">
        <div className="sub-container">
          {
            data === '' &&
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
              <article className="input-group-feild">
                <label htmlFor="file">Upload your Image</label>
                <input
                  id='file'
                  name='file'
                  type={`file`}
                  accept={`image/*`}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </article>
              <article className="button">
                <button>Update Image</button>
              </article>
            </form>
          }{
            data !== '' && <p>Message :{data}</p>
          }
        </div>
      </div>
    </>
  )
}

export default Update