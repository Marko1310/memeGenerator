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

  const changeText = function (event) {
    setMeme((meme) => {
      return { ...meme, [event.target.name]: event.target.value };
    });
  };

  return (
    <div className="form--container">
      <div className="form">
        <div className="form--input">
          <input
            onChange={changeText}
            className="form--field"
            type="text"
            placeholder="Top text"
            name="topText"
          />
          <input
            onChange={changeText}
            className="form--field"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
          />
        </div>

        <input
          onClick={getMemeImage}
          className="form--submit"
          type="submit"
          value="Get new meme image"
        ></input>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
