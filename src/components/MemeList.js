import React from "react";

const MemeList = function ({ allMemeImages, selectBox, meme }) {
  return (
    <div className="form--container">
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

export default MemeList;
