import React, { useState } from "react";

import "./App.scss";

import Header from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="App">
        <SearchBar />
        <div>
          Button (with counter):
          <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
      </main>
    </>
  );
}

export default App;
