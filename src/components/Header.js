import troll from "../images/trollFace.png";

const Header = () => {
  return (
    <header>
      <img className="header--img" src={troll} alt="meme"></img>
      <h1 className="header--title">Meme Generator</h1>
      <p className="header--desc">React Course - Project</p>
    </header>
  );
};

export default Header;
