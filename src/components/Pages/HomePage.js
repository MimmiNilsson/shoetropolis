import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  return (
    <div>
      <main className="homepage-container">
        <div className="home-header">
          <h1>Spring is near!</h1>
          <p>
            The snow slowly disappears
            <br />
            Get yourself ready for an <b>active spring </b>
            <br />
            Checkout out our <b>new collection</b> today!
          </p>
        </div>
        <div className="sidebar">
          <h1>News Letter</h1>
          <p>
            lorem ipsum lorem ipsum
            <br />
            lorem ipsum lorem ipsum
            <br />
            lorem ipsum lorem ipsum
            <br />
            lorem ipsum lorem ipsum
            <br />
          </p>
          <h1>Picture of shoe</h1>
          <p>
            lorem ipsum lorem ipsum
            <br />
            lorem ipsum lorem ipsum
            <br />
            lorem ipsum lorem ipsum
            <br />
            lorem ipsum lorem ipsum
            <br />
          </p>
          <h1>Picture of puppy</h1>
        </div>
        <div className="left">
          <h2>Get your brand</h2>
          <Link to="../products">
            {" "}
            <div className="brand-container bc1"></div>{" "}
          </Link>
          <Link to="../products">
            {" "}
            <div className="brand-container bc2"></div>{" "}
          </Link>
          <Link to="../products">
            {" "}
            <div className="brand-container bc3"></div>{" "}
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
