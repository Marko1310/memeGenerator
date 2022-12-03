const Meme = () => {
  return (
    <div className="form--container">
      <form className="form">
        <div className="form--input">
          <input className="form--field" type="text" placeholder="Top text" />
          <input
            className="form--field"
            type="text"
            placeholder="Bottom text"
          />
        </div>

        <input
          className="form--submit"
          type="submit"
          value="Get new meme image"
        ></input>
      </form>
    </div>
  );
};

export default Meme;
