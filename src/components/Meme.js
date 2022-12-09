import React from "react";
import { useState, useEffect } from "react";

const Meme = () => {
  // state for each meme image with top and bottom text
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bh3.jpg",
  });

  // state for all memes (array)
  const [allMemeImages, setAllMemeImages] = useState([]);

  // fetch data on first render
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  // erase the text, change the state of the meme image by randomly choosing an image from the array
  let getMemeImage = function () {
    meme.topText = "";
    meme.bottomText = "";

    const length = allMemeImages.length;
    const num = Math.floor(Math.random() * length);

    setMeme((meme) => {
      return { ...meme, randomImage: allMemeImages[num].url };
    });
  };

  // change text
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
            value={meme.topText}
          />
          <input
            onChange={changeText}
            className="form--field"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
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
