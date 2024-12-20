import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-body-container">
        <div className="home-body-text-container">
          <div className="body-main-text">Love will tear us apart again</div>
          <div className="body-subtext">
            The world without photography will be meaningless to us if there is
            no light.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
