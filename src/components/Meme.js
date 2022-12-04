import React from "react";
import memesData from "../memesData";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  let getMemeImage = function () {
    const length = memesData.data.memes.length;
    const num = Math.floor(Math.random() * length);
    const url = memesData.data.memes[num].url;
    setMemeImage(url);
    console.log(memeImage);
  };

  return (
    <div className="form--container">
      <div className="form">
        <div className="form--input">
          <input className="form--field" type="text" placeholder="Top text" />
          <input
            className="form--field"
            type="text"
            placeholder="Bottom text"
          />
        </div>

        <input
          onClick={getMemeImage}
          className="form--submit"
          type="submit"
          value="Get new meme image"
        ></input>
      </div>
      <img className="meme--image" src={memeImage} alt="meme" />
    </div>
  );
};

export default Meme;
