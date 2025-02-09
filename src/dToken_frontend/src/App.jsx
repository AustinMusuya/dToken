import { useState } from "react";
import Header from "./components/Header";
import Faucet from "./components/Faucet";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
import { dToken_backend } from "declarations/dToken_backend";

function App() {
  return (
    <div id="screen">
      <Header />
      <Faucet />
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
