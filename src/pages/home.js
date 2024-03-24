import React from "react";
import main from "./../assets/images/Mainimage.jpg";
import other from "./../assets/images/background.jpg";

function Home() {
    // This effect runs once, right after the first render
    React.useEffect(() => {
      // Set the background image of the body element
      document.body.style.backgroundImage = `url(${main})`;
  
      // This cleanup function runs right before the component unmounts
      return () => {
        // Reset the background image when the component unmounts
        document.body.style.backgroundImage = `url(${other})`;
      };
    }, []); // The empty array means this effect only runs on mount and unmount

    return (
        <div>
          <h1 className="mainH1">WELCOME TO CREDIBLY</h1>
          <p id="names">Matthew Vu, Funmiso Adeniyi, Jordan Louie, Haider Qureshi</p>
        </div>
      );
}

export default Home;