import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import MemeList from "./MemeList";
import Scroll from "./Scroll";

const Meme = () => {
  // state for each meme image with top and bottom text
  const [meme, setMeme] = useState({
    topText: [],
    bottomText: [],
    // randomImage: "https://i.imgflip.com/1bh3.jpg",
  });

  // state for all memes (array)
  const [allMemeImages, setAllMemeImages] = useState([]);

  // fetch data on first render, update every object with new key/value property 'clicked'

  // erase the text, update every object with new key/value property 'clicked', change the state of the meme image by importing all images
  let getAllMemeImages = function () {
    setMeme((meme) => {
      return { ...meme, topText: [], bottomText: [] };
    });

    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const upgradedObjects = data.data.memes.map((el) => {
          return { ...el, clicked: false };
        });
        console.log(upgradedObjects);
        return setAllMemeImages(upgradedObjects);
      });

    // const length = allMemeImages.length;
    // const num = Math.floor(Math.random() * length);

    // setMeme((meme) => {
    //   return { ...meme, randomImage: allMemeImages[num].url };
    // });
  };

  // function when a box is clicked
  const selectBox = function (id) {
    setMeme((meme) => {
      return { ...meme, topText: [], bottomText: [] };
    });

    const newArray = allMemeImages;
    for (let i = 0; i < newArray.length; i++) {
      newArray[i].clicked = newArray[i].id === id ? true : false;
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
    <div>
      <Form
        changeText={changeText}
        meme={meme}
        getAllMemeImages={getAllMemeImages}
      />
      <Scroll>
        <MemeList
          allMemeImages={allMemeImages}
          selectBox={selectBox}
          meme={meme}
        />
      </Scroll>
    </div>
  );
};

export default Meme;
