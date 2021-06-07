import React, { useEffect } from "react";

import cupCake from "./assets/cupcake&dino-bg.jpg";
import pierreRabbit from "./assets/pierre-rabbit-bg.jpg";
import shaun from "./assets/shaun-the-sheep-bg.jpg";
import simon from "./assets/simon-bg.jpg";
import spongebob from "./assets/spongebob-bg.jpg";
import twirlywoos from "./assets/twirlywoos-bg.jpg";
import "./App.scss";

import Header from "./components/header/Header";
import CartoonItem from "./components/cartoons/CartoonItem";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <CartoonItem
          id="1"
          title="Cupcake And Dino"
          backgroundImg={cupCake}
          // desc="this is desciption"
          trailerButton="True"
          first
        />
        <CartoonItem
          id="2"
          title="Shaun the sheep"
          backgroundImg={shaun}
          // desc="this is desciption"
          trailerButton="True"
        />
        <CartoonItem
          id="3"
          title="Twirlywoos"
          backgroundImg={twirlywoos}
          // desc="this is desciption"
          trailerButton="True"
        />

        <CartoonItem
          id="4"
          title="Simon"
          backgroundImg={simon}
          // desc="this is desciption"
        />
        <CartoonItem
          id="5"
          title="Spongebob squarepants"
          backgroundImg={spongebob}
          // desc="this is desciption"
          trailerButton="True"
        />

        <CartoonItem
          id="6"
          title="Pierre the Rabbit"
          backgroundImg={pierreRabbit}
          // desc="this is desciption"
        />
      </div>
    </div>
  );
}

export default App;
