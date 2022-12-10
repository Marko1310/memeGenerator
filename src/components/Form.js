import React from "react";

const Form = function ({ meme, changeText, getAllMemeImages }) {
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
          onClick={getAllMemeImages}
          className="form--submit"
          type="submit"
          value="Get all meme images"
        ></input>
      </div>
    </div>
  );
};

export default Form;
