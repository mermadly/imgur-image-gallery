import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "../Gallery/Gallery.css";

const Gallery = () => {
  const [fetchData, setFetchData] = useState({});
  const [section, setSection] = useState("hot");

  var requestOptions = {
    async: true,
    method: "GET",
    headers: {
      authorization: "Bearer 8e86fbd88624263be19da04afa5dd7838fb1c641",
    },
    crossDomain: true,
  };

  const fetchGallery = async () => {
    let url = `https://api.imgur.com/3/gallery/${section}`;

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    setFetchData(data);
  };

  const handleButton = (e) => {
    setSection(e.target.value);
    fetchGallery();
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  console.log("la fetchData", fetchData);

  return (
    <div>
      <div className="button-container">
        <button value="hot" onClick={handleButton}>
          Hot
        </button>
        <button value="top" onClick={handleButton}>
          Top
        </button>
        <button value="user" onClick={handleButton}>
          User
        </button>
      </div>
      <div className="grid">
        {fetchData.data
          ? fetchData.data.map((imageData, index) => {
              if (imageData.images) {
                return (
                  <Card
                    key={index}
                    title={imageData.title}
                    img={imageData.images[0].link}
                    description={imageData.images[0].description}
                    animated={imageData.images[0].animated}
                    mp4={imageData.images[0].mp4}
                    img={imageData.images}
                  />
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Gallery;
