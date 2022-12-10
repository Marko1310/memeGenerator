import React from "react";
import { useState, useEffect } from "react";
import Container from "./Container";

const Meme = () => {
  // state for each meme image with top and bottom text
  const [meme, setMeme] = useState({
    topText: [],
    bottomText: [],
    randomImage: "https://i.imgflip.com/1bh3.jpg",
  });

  // state for all memes (array)
  const [allMemeImages, setAllMemeImages] = useState([]);

  // fetch data on first render, update every object with new key/value property 'clicked'
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const upgradedObjects = data.data.memes.map((el) => {
          return { ...el, clicked: false };
        });
        console.log(upgradedObjects);
        return setAllMemeImages(upgradedObjects);
      });
  }, []);

  // erase the text, change the state of the meme image by randomly choosing an image from the array
  let getMemeImage = function () {
    setMeme((meme) => {
      return { ...meme, topText: [], bottomText: [] };
    });

    const length = allMemeImages.length;
    const num = Math.floor(Math.random() * length);

    setMeme((meme) => {
      return { ...meme, randomImage: allMemeImages[num].url };
    });
  };

  // function when a box is clicked
  const selectBox = function (id) {
    setMeme((meme) => {
      return { ...meme, topText: [], bottomText: [] };
    });

    const newArray = allMemeImages;

    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === id) {
        newArray[i].clicked = true;
      }
    }
    setAllMemeImages(newArray);
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

      <div className="grid--container">
        {allMemeImages.map((el) => {
          return (
            <div
              onClick={() => selectBox(el.id)}
              key={el.id}
              className="meme--box"
              style={{
                transform: el.clicked ? "scale(1.1)" : "",
                backgroundColor: el.clicked ? "#d5d4d8" : "",
              }}
            >
              <h4 className="meme--title">{el.name.toUpperCase()}</h4>
              <div className="image--cont">
                <img src={el.url} className="meme--image" />
                {el.clicked && (
                  <h2 className="meme--text top">{meme.topText}</h2>
                )}
                {el.clicked && (
                  <h2 className="meme--text bottom">{meme.bottomText}</h2>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meme;
