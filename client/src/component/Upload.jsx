  import axios from "axios";
  import React, { useState } from "react";
  import './upload.css'
  const Upload = () => {
    const [ID, setID] = useState(``);
    const [file, setFile] = useState("");

    const HandleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      try {
        let response = await axios.post(
          `http://localhost:8080/image/register`,
          formData
        );
        console.log(response.data);
        const imageId = response.data.data.imageId;
        setID(imageId);
        console.log(imageId);
        console.log(ID);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <div className="container">
          <div className="sub-container">
            {ID === `` && (
              <form onSubmit={(e) => HandleSubmit(e)}>
                <article className="input-group-feild">
                  <label htmlFor="file">Enter Your User Id:</label>
                  <input
                    id="file"
                    name="file"
                    type={`file`}
                    accept={`image/*`}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </article>
                <aside className="button">
                  <button>UploadImage</button>
                </aside>
              </form>
            )}
            {ID !== `` && <p>User ID :-&gt;{ID}</p>}
          </div>
        </div>
      </>
    );
  };

  export default Upload;
