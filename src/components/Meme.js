import React from "react";
import memesData from "../memesData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bh3.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  let getMemeImage = function () {
    const length = allMemeImages.data.memes.length;
    const num = Math.floor(Math.random() * length);
    setMeme((meme) => {
      return { ...meme, randomImage: allMemeImages.data.memes[num].url };
    });

    console.log(meme.randomImage);
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
      <img className="meme--image" src={meme.randomImage} alt="meme" />
    </div>
  );
};

export default Meme;
